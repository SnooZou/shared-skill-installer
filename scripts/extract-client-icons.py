#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
from pathlib import Path


DEFAULT_APP_ROOTS = [Path("/Applications"), Path.home() / "Applications"]
KNOWN_CLIENT_ALIASES = {
    "codex": ["Codex", "ChatGPT", "OpenAI Codex"],
    "workbuddy": ["WorkBuddy"],
    "trae": ["Trae CN", "Trae"],
    "trae-cn": ["Trae CN", "Trae"],
    "cursor": ["Cursor"],
    "claude": ["Claude"],
    "claude-desktop": ["Claude"],
}
PREFERRED_BUNDLE_NAMES = {
    "codex": ["ChatGPT", "Codex"],
    "workbuddy": ["WorkBuddy"],
    "trae": ["Trae CN", "Trae"],
    "trae-cn": ["Trae CN", "Trae"],
    "cursor": ["Cursor"],
    "claude": ["Claude"],
    "claude-desktop": ["Claude"],
}
KNOWN_BUNDLE_IDENTIFIERS = {
    "codex": {"com.openai.codex"},
    "cursor": {"com.todesktop.230313mzl4w4u92"},
}
KNOWN_URL_SCHEMES = {
    "codex": {"codex"},
    "cursor": {"cursor"},
    "claude": {"claude"},
    "claude-desktop": {"claude"},
}
PREFERRED_RESOURCE_NAMES = {
    "codex": ["icon-codex-dark-color.png", "icon.png", "icon.icns", "app.icns"],
    "workbuddy": ["icon.png", "icon.icns", "app.icns"],
    "trae": ["Trae CN.icns", "Trae.icns", "icon.png", "icon.icns", "app.icns"],
    "trae-cn": ["Trae CN.icns", "Trae.icns", "icon.png", "icon.icns", "app.icns"],
    "cursor": ["icon.png", "icon.icns", "Cursor.icns", "app.icns"],
    "claude": ["icon.png", "icon.icns", "Claude.icns", "app.icns"],
    "claude-desktop": ["icon.png", "icon.icns", "Claude.icns", "app.icns"],
}


def normalize(value: str) -> str:
    return "".join(ch.lower() for ch in value if ch.isalnum())


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Extract official local app icons for shared-library clients")
    parser.add_argument("--shared-root", required=True, help="Shared skill root, used to read client-roots.tsv")
    parser.add_argument("--output-dir", required=True, help="Directory where PNG icons should be written")
    parser.add_argument("--manifest", required=True, help="JS manifest output path")
    return parser.parse_args()


def read_client_labels(shared_root: Path) -> list[str]:
    labels: list[str] = []
    roots_file = shared_root / ".shared-skill-state" / "client-roots.tsv"
    if not roots_file.exists():
        return labels
    for raw in roots_file.read_text().splitlines():
        stripped = raw.strip()
        if not stripped or stripped.startswith("#"):
            continue
        label = raw.split("\t", 1)[0].strip()
        if label:
            labels.append(label)
    return labels


def app_search_terms(label: str) -> list[str]:
    aliases = KNOWN_CLIENT_ALIASES.get(label, [])
    fallback = [
        label,
        label.replace("-", " "),
        label.replace("_", " "),
        label.title(),
        label.replace("-", "").replace("_", ""),
    ]
    seen: set[str] = set()
    terms: list[str] = []
    for item in aliases + fallback:
        token = item.strip()
        if not token:
            continue
        key = normalize(token)
        if key in seen:
            continue
        seen.add(key)
        terms.append(token)
    return terms


def discover_app_bundle(label: str) -> Path | None:
    terms = app_search_terms(label)
    normalized_terms = {normalize(term) for term in terms}
    exact_matches: list[Path] = []
    partial_matches: list[Path] = []
    metadata_matches: list[Path] = []
    bundle_name_matches = {normalize(name) for name in PREFERRED_BUNDLE_NAMES.get(label, [])}
    bundle_id_matches = KNOWN_BUNDLE_IDENTIFIERS.get(label, set())
    scheme_matches = {normalize(item) for item in KNOWN_URL_SCHEMES.get(label, set())}

    for root in DEFAULT_APP_ROOTS:
        if not root.exists():
            continue
        for child in root.glob("*.app"):
            stem_key = normalize(child.stem)
            if stem_key in bundle_name_matches:
                exact_matches.append(child)
                continue
            if stem_key in normalized_terms:
                exact_matches.append(child)
                continue
            if any(term in stem_key or stem_key in term for term in normalized_terms):
                partial_matches.append(child)
                continue

            info_plist = child / "Contents" / "Info.plist"
            if not info_plist.exists():
                continue
            try:
                raw = subprocess.run(
                    ["plutil", "-convert", "json", "-o", "-", str(info_plist)],
                    capture_output=True,
                    text=True,
                    check=True,
                )
                payload = json.loads(raw.stdout)
            except Exception:
                continue

            metadata_terms = {
                normalize(str(payload.get("CFBundleDisplayName", ""))),
                normalize(str(payload.get("CFBundleName", ""))),
                normalize(str(payload.get("BundleSigningBaseName", ""))),
                normalize(str(payload.get("CFBundleIdentifier", ""))),
            }
            for alt_name in payload.get("CFBundleAlternateNames", []):
                metadata_terms.add(normalize(str(alt_name)))
            for url_type in payload.get("CFBundleURLTypes", []):
                for scheme in url_type.get("CFBundleURLSchemes", []):
                    metadata_terms.add(normalize(str(scheme)))

            bundle_identifier = str(payload.get("CFBundleIdentifier", ""))
            if bundle_identifier in bundle_id_matches:
                metadata_matches.append(child)
                continue
            if scheme_matches and scheme_matches.intersection(metadata_terms):
                metadata_matches.append(child)
                continue
            if metadata_terms.intersection(normalized_terms):
                metadata_matches.append(child)

    if exact_matches:
        return sorted(exact_matches)[0]
    if metadata_matches:
        return sorted(metadata_matches)[0]
    if partial_matches:
        return sorted(partial_matches)[0]
    return None


def candidate_resource_names(label: str, bundle_name: str) -> list[str]:
    names = []
    seen: set[str] = set()
    for item in PREFERRED_RESOURCE_NAMES.get(label, []):
        if item not in seen:
            seen.add(item)
            names.append(item)

    dynamic = [
        f"{bundle_name}.icns",
        f"{bundle_name}.png",
        "icon.png",
        "Icon.png",
        "icon.icns",
        "app.icns",
        "AppIcon.icns",
    ]
    for item in dynamic:
        if item not in seen:
            seen.add(item)
            names.append(item)
    return names


def find_resource_file(bundle: Path, label: str) -> Path | None:
    resources = bundle / "Contents" / "Resources"
    if not resources.exists():
        return None

    for name in candidate_resource_names(label, bundle.stem):
        candidate = resources / name
        if candidate.exists():
            return candidate

    generic = sorted(
        path
        for path in resources.iterdir()
        if path.is_file() and path.suffix.lower() in {".png", ".icns"}
    )
    return generic[0] if generic else None


def convert_or_copy_icon(source: Path, destination: Path) -> bool:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if source.suffix.lower() == ".png":
        shutil.copy2(source, destination)
        return True

    if source.suffix.lower() == ".icns":
        result = subprocess.run(
            ["sips", "-s", "format", "png", "--resampleHeightWidthMax", "192", str(source), "--out", str(destination)],
            capture_output=True,
            text=True,
        )
        return result.returncode == 0 and destination.exists()

    return False


def write_manifest(entries: dict[str, dict[str, str]], manifest_path: Path) -> None:
    payload = "window.SHARED_LIBRARY_CLIENT_ICONS = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(payload)


def main() -> None:
    ns = parse_args()
    shared_root = Path(ns.shared_root).expanduser().resolve()
    output_dir = Path(ns.output_dir).expanduser().resolve()
    manifest = Path(ns.manifest).expanduser().resolve()

    output_dir.mkdir(parents=True, exist_ok=True)
    for stale in output_dir.glob("*.png"):
        stale.unlink()

    entries: dict[str, dict[str, str]] = {}
    for label in read_client_labels(shared_root):
        bundle = discover_app_bundle(label)
        if bundle is None:
            continue
        resource = find_resource_file(bundle, label)
        if resource is None:
            continue
        dest = output_dir / f"{label}.png"
        if not convert_or_copy_icon(resource, dest):
            continue
        entries[label] = {
            "path": f"./assets/clients/{label}.png",
            "bundle_name": bundle.stem,
            "bundle_path": str(bundle),
            "source_path": str(resource),
            "official": True,
        }

    write_manifest(entries, manifest)
    print(f"Extracted {len(entries)} client icons")


if __name__ == "__main__":
    main()
