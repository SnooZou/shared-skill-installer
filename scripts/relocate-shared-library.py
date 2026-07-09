#!/usr/bin/env python3

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
CONFIG_SCRIPT = ROOT / "scripts" / "shared-library-config.py"
DEFAULT_NAME = "AI-skills"


def run(cmd: list[str], env: dict[str, str] | None = None) -> subprocess.CompletedProcess[str]:
    return subprocess.run(cmd, text=True, capture_output=True, env=env)


def resolve_active_root() -> Path:
    proc = run([sys.executable, str(CONFIG_SCRIPT), "--get-root"])
    if proc.returncode == 0 and proc.stdout.strip():
        return Path(proc.stdout.strip()).expanduser().resolve()
    return (Path.home() / DEFAULT_NAME).resolve()


def normalize_target(raw: str, current_root: Path) -> Path:
    picked = Path(raw).expanduser().resolve()
    if picked.name == current_root.name or (picked / ".shared-skill-state").exists():
        return picked
    return picked / current_root.name


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Copy the shared skill library to a new location and switch the active root")
    parser.add_argument("--new-root", required=True, help="New shared library root or parent directory")
    parser.add_argument("--current-root", help="Current shared library root; defaults to configured active root")
    return parser.parse_args()


def main() -> None:
    ns = parse_args()
    current_root = Path(ns.current_root).expanduser().resolve() if ns.current_root else resolve_active_root()
    new_root = normalize_target(ns.new_root, current_root)

    if current_root == new_root:
        print(f"Shared library already uses: {new_root}")
        return

    if not current_root.exists():
        raise SystemExit(f"Current shared library not found: {current_root}")
    if new_root.exists():
        raise SystemExit(f"Target already exists: {new_root}")
    if str(new_root).startswith(str(current_root) + os.sep):
        raise SystemExit("Target location cannot be nested inside the current shared library")

    new_root.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(current_root, new_root, symlinks=True)

    package_root = new_root / "shared-skill-installer"
    install_script = package_root / "scripts" / "install-shared-skill"
    if not install_script.exists():
        raise SystemExit(f"Missing installer in copied library: {install_script}")

    env = os.environ.copy()
    env["SHARED_ROOT"] = str(new_root)
    env["PACKAGE_ROOT"] = str(package_root)

    proc = run([str(install_script), "--reconcile-library"], env=env)
    if proc.returncode != 0:
        raise SystemExit(proc.stderr.strip() or proc.stdout.strip() or "Failed to rebuild links in the new shared library")

    config_proc = run([sys.executable, str(CONFIG_SCRIPT), "--set-root", str(new_root)])
    if config_proc.returncode != 0:
        raise SystemExit(config_proc.stderr.strip() or "Failed to persist the new shared library location")

    print(f"Active shared library switched to: {new_root}")
    print(f"Previous library kept as backup: {current_root}")


if __name__ == "__main__":
    main()
