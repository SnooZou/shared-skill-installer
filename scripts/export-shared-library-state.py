#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


DEFAULT_SHARED_ROOT = Path.home() / "AI-skills"
DEFAULT_STATE_ROOT = DEFAULT_SHARED_ROOT / ".shared-skill-state"
DEFAULT_REPO_URL = "https://github.com/SnooZou/shared-skill-installer"
CONFIG_PATH = Path.home() / ".shared-skill-installer" / "config.json"


@dataclass
class ClientRoot:
    label: str
    path: Path


def run(
    args: list[str],
    cwd: Path | None = None,
    timeout: int = 15,
) -> tuple[int, str, str]:
    try:
        proc = subprocess.run(
            args,
            cwd=str(cwd) if cwd else None,
            capture_output=True,
            text=True,
            timeout=timeout,
        )
        return proc.returncode, proc.stdout.strip(), proc.stderr.strip()
    except subprocess.TimeoutExpired:
        return 124, "", "timeout"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Export shared skill library state")
    parser.add_argument(
        "--shared-root",
        default=os.environ.get("SHARED_ROOT") or str(resolve_default_shared_root()),
        help="Shared skill root directory",
    )
    parser.add_argument(
        "--package-root",
        default=os.environ.get("PACKAGE_ROOT"),
        help="Optional package root directory used to read VERSION metadata",
    )
    parser.add_argument(
        "--output",
        required=True,
        help="Output file path",
    )
    parser.add_argument(
        "--format",
        choices=("json", "js"),
        default="json",
        help="Output format",
    )
    return parser.parse_args()


def read_client_roots(state_root: Path) -> list[ClientRoot]:
    roots_file = state_root / "client-roots.tsv"
    clients: list[ClientRoot] = []
    if not roots_file.exists():
        return clients
    for raw in roots_file.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        label, path = raw.split("\t", 1)
        clients.append(ClientRoot(label=label.strip(), path=Path(path.strip()).expanduser()))
    return clients


def resolve_default_shared_root() -> Path:
    if CONFIG_PATH.exists():
        try:
            payload = json.loads(CONFIG_PATH.read_text())
            root = payload.get("shared_root")
            if root:
                return Path(root).expanduser().resolve()
        except (json.JSONDecodeError, OSError):
            pass
    return DEFAULT_SHARED_ROOT.resolve()


def read_skill_map(map_file: Path) -> list[dict[str, str]]:
    skills: list[dict[str, str]] = []
    for raw in map_file.read_text().splitlines():
        if not raw.strip():
            continue
        name, rel = raw.split("\t", 1)
        skills.append({"name": name.strip(), "relative_path": rel.strip()})
    return skills


def parse_skill_frontmatter(skill_dir: Path) -> dict[str, str]:
    skill_file = skill_dir / "SKILL.md"
    if not skill_file.exists():
        return {}
    text = skill_file.read_text(errors="ignore")
    frontmatter = re.match(r"^---\n(.*?)\n---\n", text, re.S)
    if not frontmatter:
        return {}

    meta: dict[str, str] = {}
    lines = frontmatter.group(1).splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip() or line.startswith((" ", "\t")) or ":" not in line:
            i += 1
            continue

        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip()

        if value in {">", "|", ">-", "|-", ">+", "|+"}:
            block_lines: list[str] = []
            i += 1
            while i < len(lines):
                block_line = lines[i]
                if not block_line.strip():
                    block_lines.append("")
                    i += 1
                    continue
                if not block_line.startswith((" ", "\t")):
                    break
                block_lines.append(block_line.lstrip())
                i += 1

            if value.startswith(">"):
                parsed = " ".join(part.strip() for part in block_lines if part.strip())
            else:
                parsed = "\n".join(part.rstrip() for part in block_lines).strip()
            meta[key] = parsed
            continue

        meta[key] = value.strip('"').strip("'")
        i += 1
    return meta


def normalize_description_text(value: str) -> str:
    text = re.sub(r"\s+", " ", value or "").strip()
    return text[:240]


def sanitize_body_line(line: str) -> str:
    line = line.strip()
    if not line or line.startswith(("#", "---", "```")):
        return ""
    if re.fullmatch(r"[>|:\-\s|]+", line):
        return ""
    line = re.sub(r"^>\s*", "", line)
    line = re.sub(r"^[-*+]\s*", "", line)
    return normalize_description_text(line)


def first_body_line(skill_file: Path) -> str:
    text = skill_file.read_text(errors="ignore")
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    for line in lines:
        cleaned = sanitize_body_line(line)
        if cleaned:
            return cleaned
    return ""


def read_skill_name(skill_dir: Path) -> str:
    meta = parse_skill_frontmatter(skill_dir)
    return meta.get("name") or skill_dir.name


def read_skill_descriptions(skill_dir: Path) -> dict[str, str]:
    skill_file = skill_dir / "SKILL.md"
    if not skill_file.exists():
        return {"default": "", "zh": "", "en": ""}

    meta = parse_skill_frontmatter(skill_dir)
    default = normalize_description_text(meta.get("description") or first_body_line(skill_file))
    zh = normalize_description_text(meta.get("zh_description") or meta.get("description_zh") or default)
    en = normalize_description_text(meta.get("en_description") or meta.get("description_en") or default)
    return {"default": default, "zh": zh, "en": en}


def du_size_bytes(path: Path) -> int | None:
    if not path.exists():
        return None
    code, out, _ = run(["du", "-sk", str(path)], timeout=120)
    if code != 0 or not out:
        return None
    try:
        return int(out.split()[0]) * 1024
    except (ValueError, IndexError):
        return None


def human_size(num: int | None) -> str:
    if num is None:
        return "unknown"
    value = float(num)
    units = ["B", "KB", "MB", "GB", "TB"]
    unit = 0
    while value >= 1024 and unit < len(units) - 1:
        value /= 1024
        unit += 1
    if unit == 0:
        return f"{int(value)} {units[unit]}"
    return f"{value:.1f} {units[unit]}"


def read_package_meta(package_root: Path | None) -> dict[str, str]:
    version = "unknown"
    if package_root is not None:
        version_file = package_root / "VERSION"
        if version_file.exists():
            version = version_file.read_text(errors="ignore").strip() or version
    return {
        "name": "shared-skill-installer",
        "version": version,
        "repo_url": DEFAULT_REPO_URL,
    }


def git_metadata(repo_root: Path) -> dict[str, Any]:
    if not (repo_root / ".git").exists():
        return {
            "is_git_repo": False,
            "remote_url": None,
            "branch": None,
            "head_commit": None,
            "dirty": None,
            "update_state": "not_git",
            "remote_head": None,
        }

    meta: dict[str, Any] = {"is_git_repo": True}
    code, out, _ = run(["git", "-C", str(repo_root), "remote", "get-url", "origin"])
    meta["remote_url"] = out if code == 0 and out else None

    code, out, _ = run(["git", "-C", str(repo_root), "branch", "--show-current"])
    meta["branch"] = out if code == 0 and out else None

    code, out, _ = run(["git", "-C", str(repo_root), "rev-parse", "HEAD"])
    meta["head_commit"] = out if code == 0 and out else None

    code, out, _ = run(["git", "-C", str(repo_root), "status", "--porcelain"])
    meta["dirty"] = bool(out) if code == 0 else None

    if not meta["remote_url"]:
        meta["update_state"] = "no_remote"
        meta["remote_head"] = None
        return meta

    code, out, _ = run(
        ["git", "-C", str(repo_root), "ls-remote", "origin", "HEAD"],
        timeout=6,
    )
    if code == 124:
        meta["update_state"] = "timeout"
        meta["remote_head"] = None
        return meta

    if code != 0 or not out:
        meta["update_state"] = "unknown"
        meta["remote_head"] = None
        return meta

    remote_head = out.split()[0]
    meta["remote_head"] = remote_head
    if meta["head_commit"] == remote_head:
        meta["update_state"] = "up_to_date"
    else:
        meta["update_state"] = "update_available"
    return meta


def system_skill_conflict(client: ClientRoot, skill_name: str) -> bool:
    return (client.path / ".system" / skill_name).exists()


def link_status(
    client: ClientRoot,
    skill_name: str,
    target_dir: Path,
    *,
    preview: bool = False,
) -> dict[str, Any]:
    link_path = client.path / skill_name
    info: dict[str, Any] = {
        "client": client.label,
        "link_path": str(link_path),
        "exists": link_path.exists() or link_path.is_symlink(),
        "is_symlink": link_path.is_symlink(),
        "target": None,
        "resolved_target": None,
        "ok": False,
        "status": "broken",
    }

    if preview:
        info["ok"] = True
        info["status"] = "preview_only"
        return info

    if client.label == "codex" and system_skill_conflict(client, skill_name):
        info["ok"] = True
        info["status"] = "system_owned"
        return info

    if link_path.is_symlink():
        target = os.readlink(link_path)
        info["target"] = target
        resolved = (link_path.parent / target).resolve()
        info["resolved_target"] = str(resolved)
        info["ok"] = resolved == target_dir.resolve()
        info["status"] = "linked" if info["ok"] else "broken"
    elif link_path.exists():
        info["resolved_target"] = str(link_path.resolve())
        info["ok"] = link_path.resolve() == target_dir.resolve()
        info["status"] = "linked" if info["ok"] else "broken"
    else:
        info["status"] = "missing"
    return info


def container_kind(skill_entries: list[dict[str, Any]]) -> str:
    if len(skill_entries) <= 1:
        return "single-skill"
    return "multi-skill"


def discover_unindexed_skill_roots(shared_root: Path, indexed_names: set[str]) -> list[Path]:
    roots: list[Path] = []
    for child in sorted(shared_root.iterdir()):
        if not child.is_dir():
            continue
        if child.name.startswith("."):
            continue
        if child.name in indexed_names:
            continue
        if (child / "SKILL.md").exists():
            roots.append(child)
    return roots


def build_state(shared_root: Path, package_root: Path | None = None) -> dict[str, Any]:
    state_root = shared_root / ".shared-skill-state"
    clients = read_client_roots(state_root)
    map_files = sorted(state_root.glob("*.skillmap.tsv"))
    indexed_container_names = {path.name.removesuffix(".skillmap.tsv") for path in map_files}
    containers: list[dict[str, Any]] = []
    total_skill_entries = 0
    total_broken_links = 0
    update_available_count = 0
    total_storage_bytes = 0
    preview_container_count = 0

    for map_file in map_files:
        if map_file.name == "client-roots.tsv":
            continue

        container_name = map_file.name.removesuffix(".skillmap.tsv")
        preview = container_name.endswith("-preview")
        if preview:
            preview_container_count += 1
        repo_root = shared_root / container_name
        entries = read_skill_map(map_file)
        git_info = git_metadata(repo_root)
        size_bytes = du_size_bytes(repo_root)
        if size_bytes:
            total_storage_bytes += size_bytes
        if git_info.get("update_state") == "update_available":
            update_available_count += 1

        skill_entries: list[dict[str, Any]] = []
        container_broken = 0
        for entry in entries:
            skill_dir = repo_root / entry["relative_path"]
            client_links = [link_status(client, entry["name"], skill_dir, preview=preview) for client in clients]
            broken = sum(1 for item in client_links if not item["ok"])
            container_broken += broken
            descriptions = read_skill_descriptions(skill_dir)
            skill_entries.append(
                {
                    "name": entry["name"],
                    "relative_path": entry["relative_path"],
                    "path": str(skill_dir),
                    "exists": skill_dir.exists(),
                    "has_skill_md": (skill_dir / "SKILL.md").exists(),
                    "description": descriptions["default"],
                    "description_zh": descriptions["zh"],
                    "description_en": descriptions["en"],
                    "client_links": client_links,
                    "linked_clients": sum(1 for item in client_links if item["ok"]),
                    "expected_clients": len(clients),
                }
            )

        total_skill_entries += len(skill_entries)
        if not preview:
            total_broken_links += container_broken
        containers.append(
            {
                "name": container_name,
                "path": str(repo_root),
                "map_file": str(map_file),
                "preview": preview,
                "exists": repo_root.exists(),
                "kind": container_kind(skill_entries),
                "skill_count": len(skill_entries),
                "size_bytes": size_bytes,
                "size_label": human_size(size_bytes),
                "git": git_info,
                "broken_links": container_broken,
                "indexed": True,
                "skills": skill_entries,
            }
        )

    for skill_root in discover_unindexed_skill_roots(shared_root, indexed_container_names):
        skill_name = read_skill_name(skill_root)
        git_info = git_metadata(skill_root)
        size_bytes = du_size_bytes(skill_root)
        if size_bytes:
            total_storage_bytes += size_bytes
        if git_info.get("update_state") == "update_available":
            update_available_count += 1

        client_links = [link_status(client, skill_name, skill_root) for client in clients]
        broken = sum(1 for item in client_links if not item["ok"])
        total_broken_links += broken
        total_skill_entries += 1
        descriptions = read_skill_descriptions(skill_root)

        containers.append(
            {
                "name": skill_root.name,
                "path": str(skill_root),
                "map_file": None,
                "preview": False,
                "exists": True,
                "kind": "single-skill",
                "skill_count": 1,
                "size_bytes": size_bytes,
                "size_label": human_size(size_bytes),
                "git": git_info,
                "broken_links": broken,
                "indexed": False,
                "skills": [
                    {
                        "name": skill_name,
                        "relative_path": ".",
                        "path": str(skill_root),
                        "exists": True,
                        "has_skill_md": True,
                        "description": descriptions["default"],
                        "description_zh": descriptions["zh"],
                        "description_en": descriptions["en"],
                        "client_links": client_links,
                        "linked_clients": sum(1 for item in client_links if item["ok"]),
                        "expected_clients": len(clients),
                    }
                ],
            }
        )

    skill_name_counts: dict[str, int] = {}
    for container in containers:
        if container.get("preview"):
            continue
        for skill in container["skills"]:
            skill_name_counts[skill["name"]] = skill_name_counts.get(skill["name"], 0) + 1

    duplicate_container_count = 0
    for container in containers:
        if container.get("preview"):
            container["duplicate_skill_names"] = []
            container["duplicate_count"] = 0
            continue
        duplicates = sorted({skill["name"] for skill in container["skills"] if skill_name_counts.get(skill["name"], 0) > 1})
        container["duplicate_skill_names"] = duplicates
        container["duplicate_count"] = len(duplicates)
        if duplicates:
            duplicate_container_count += 1

    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "shared_root": str(shared_root),
        "state_root": str(state_root),
        "package_meta": read_package_meta(package_root),
        "clients": [{"label": client.label, "path": str(client.path)} for client in clients],
        "summary": {
            "container_count": len(containers),
            "active_container_count": len(containers) - preview_container_count,
            "preview_container_count": preview_container_count,
            "skill_entry_count": total_skill_entries,
            "client_count": len(clients),
            "broken_link_count": total_broken_links,
            "update_available_count": update_available_count,
            "duplicate_container_count": duplicate_container_count,
            "total_storage_bytes": total_storage_bytes,
            "total_storage_label": human_size(total_storage_bytes),
        },
        "containers": containers,
    }


def write_output(payload: dict[str, Any], output_path: Path, fmt: str) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    if fmt == "json":
        output_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
        return
    js = "window.SHARED_LIBRARY_STATE = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    output_path.write_text(js)


def main() -> None:
    ns = parse_args()
    shared_root = Path(ns.shared_root).expanduser().resolve()
    package_root = Path(ns.package_root).expanduser().resolve() if ns.package_root else None
    payload = build_state(shared_root, package_root)
    write_output(payload, Path(ns.output), ns.format)


if __name__ == "__main__":
    main()
