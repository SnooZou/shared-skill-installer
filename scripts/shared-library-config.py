#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path


DEFAULT_SHARED_ROOT = Path.home() / "AI-skills"
CONFIG_DIR = Path.home() / ".shared-skill-installer"
CONFIG_PATH = CONFIG_DIR / "config.json"


def resolve_default_root() -> Path:
    env_root = os.environ.get("SHARED_ROOT")
    if env_root:
        return Path(env_root).expanduser().resolve()
    if CONFIG_PATH.exists():
        try:
            payload = json.loads(CONFIG_PATH.read_text())
            root = payload.get("shared_root")
            if root:
                return Path(root).expanduser().resolve()
        except (json.JSONDecodeError, OSError):
            pass
    return DEFAULT_SHARED_ROOT.resolve()


def write_config(shared_root: Path) -> None:
    CONFIG_DIR.mkdir(parents=True, exist_ok=True)
    payload = {
        "shared_root": str(shared_root.resolve()),
        "config_path": str(CONFIG_PATH.resolve()),
    }
    CONFIG_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Resolve or update shared-skill-installer configuration")
    parser.add_argument("--get-root", action="store_true", help="Print the active shared library root")
    parser.add_argument("--set-root", help="Persist a new shared library root")
    parser.add_argument("--print-config-path", action="store_true", help="Print the config file path")
    parser.add_argument("--json", action="store_true", help="Print JSON instead of plain text")
    return parser.parse_args()


def main() -> None:
    ns = parse_args()

    if ns.set_root:
        root = Path(ns.set_root).expanduser().resolve()
        write_config(root)
        if ns.json:
            print(json.dumps({"shared_root": str(root), "config_path": str(CONFIG_PATH.resolve())}, ensure_ascii=False))
        else:
            print(root)
        return

    if ns.print_config_path:
        if ns.json:
            print(json.dumps({"config_path": str(CONFIG_PATH.resolve())}, ensure_ascii=False))
        else:
            print(CONFIG_PATH.resolve())
        return

    root = resolve_default_root()
    if ns.json:
        print(json.dumps({"shared_root": str(root), "config_path": str(CONFIG_PATH.resolve())}, ensure_ascii=False))
    else:
        print(root)


if __name__ == "__main__":
    main()
