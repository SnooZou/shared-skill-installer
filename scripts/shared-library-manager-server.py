#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile
import threading
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


ROOT = Path(__file__).resolve().parent.parent
MANAGER_DIR = ROOT / "manager"
CONFIG_SCRIPT = ROOT / "scripts" / "shared-library-config.py"
EXPORT_SCRIPT = ROOT / "scripts" / "export-shared-library-state.py"
BUILD_SCRIPT = ROOT / "scripts" / "build-shared-library-manager.sh"
RELOCATE_SCRIPT = ROOT / "scripts" / "relocate-shared-library.py"
CLIENT_ICON_MANIFEST = MANAGER_DIR / "data" / "client-icons.js"


def run(cmd: list[str], env: dict[str, str] | None = None) -> subprocess.CompletedProcess[str]:
    return subprocess.run(cmd, text=True, capture_output=True, env=env)


def active_shared_root() -> Path:
    proc = run([sys.executable, str(CONFIG_SCRIPT), "--get-root"])
    if proc.returncode == 0 and proc.stdout.strip():
        return Path(proc.stdout.strip()).expanduser().resolve()
    return (Path.home() / "AI-skills").resolve()


def configured_shared_root() -> Path:
    proc = run([sys.executable, str(CONFIG_SCRIPT), "--get-root"])
    if proc.returncode != 0 or not proc.stdout.strip():
        raise RuntimeError(proc.stderr.strip() or "Unable to resolve the active shared library")
    return Path(proc.stdout.strip()).expanduser().resolve()


def build_state_payload(shared_root: Path) -> dict:
    with tempfile.NamedTemporaryFile(suffix=".json", delete=False) as fh:
        tmp_path = Path(fh.name)
    try:
        proc = run(
            [
                sys.executable,
                str(EXPORT_SCRIPT),
                "--shared-root",
                str(shared_root),
                "--package-root",
                str(ROOT),
                "--output",
                str(tmp_path),
                "--format",
                "json",
            ]
        )
        if proc.returncode != 0:
            raise RuntimeError(proc.stderr.strip() or proc.stdout.strip() or "Failed to export library state")
        payload = json.loads(tmp_path.read_text())
        payload["client_icons"] = read_client_icons()
        return payload
    finally:
        tmp_path.unlink(missing_ok=True)


def read_client_icons() -> dict:
    if not CLIENT_ICON_MANIFEST.exists():
        return {}
    raw = CLIENT_ICON_MANIFEST.read_text(encoding="utf-8").strip()
    prefix = "window.SHARED_LIBRARY_CLIENT_ICONS = "
    if not raw.startswith(prefix):
        return {}
    body = raw[len(prefix):]
    if body.endswith(";"):
        body = body[:-1]
    try:
        return json.loads(body)
    except json.JSONDecodeError:
        return {}


def refresh_bundled_assets(shared_root: Path) -> dict:
    env = os.environ.copy()
    env["SHARED_ROOT"] = str(shared_root)
    proc = run([str(BUILD_SCRIPT)], env=env)
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip() or proc.stdout.strip() or "Failed to rebuild manager data")
    return build_state_payload(shared_root)


def normalize_openable_path(raw: str) -> Path:
    return Path(raw).expanduser().resolve()


def open_path(path: Path) -> None:
    if sys.platform == "darwin":
        proc = run(["open", str(path)])
    elif os.name == "nt":
        proc = run(["explorer", str(path)])
    else:
        opener = shutil.which("xdg-open") or shutil.which("gio")
        if opener is None:
            raise RuntimeError("No folder opener found on this system")
        cmd = [opener, str(path)]
        proc = run(cmd)
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr.strip() or proc.stdout.strip() or f"Failed to open: {path}")


def pick_directory() -> Path:
    if sys.platform == "darwin":
        script = 'POSIX path of (choose folder with prompt "选择新的共享技能库位置")'
        proc = run(["osascript", "-e", script])
        if proc.returncode != 0:
            raise RuntimeError(proc.stderr.strip() or "Folder selection was cancelled")
        chosen = proc.stdout.strip()
        if not chosen:
            raise RuntimeError("Folder selection was cancelled")
        return Path(chosen).expanduser().resolve()

    if os.name == "nt":
        powershell = [
            "powershell",
            "-NoProfile",
            "-Command",
            "Add-Type -AssemblyName System.Windows.Forms; $dlg = New-Object System.Windows.Forms.FolderBrowserDialog; "
            '$dlg.Description = "Select a new shared library location"; '
            'if ($dlg.ShowDialog() -eq "OK") { [Console]::WriteLine($dlg.SelectedPath) }',
        ]
        proc = run(powershell)
        if proc.returncode != 0 or not proc.stdout.strip():
            raise RuntimeError(proc.stderr.strip() or "Folder selection was cancelled")
        return Path(proc.stdout.strip()).expanduser().resolve()

    for chooser in (shutil.which("zenity"), shutil.which("kdialog")):
        if chooser:
            if chooser.endswith("zenity"):
                proc = run([chooser, "--file-selection", "--directory", "--title=Select a new shared library location"])
            else:
                proc = run([chooser, "--getexistingdirectory", str(Path.home())])
            if proc.returncode == 0 and proc.stdout.strip():
                return Path(proc.stdout.strip()).expanduser().resolve()
    raise RuntimeError("This system does not support the built-in folder picker")


def update_container(shared_root: Path, container_name: str) -> str:
    repo_root = shared_root / container_name
    if not repo_root.exists():
        raise RuntimeError(f"Container not found: {container_name}")
    if not (repo_root / ".git").exists():
        raise RuntimeError("This container was not installed from a Git repository")

    fetch_proc = run(["git", "-C", str(repo_root), "fetch", "--all", "--prune"])
    if fetch_proc.returncode != 0:
        raise RuntimeError(fetch_proc.stderr.strip() or fetch_proc.stdout.strip() or "Failed to fetch remote changes")

    pull_proc = run(["git", "-C", str(repo_root), "pull", "--ff-only"])
    if pull_proc.returncode != 0:
        message = pull_proc.stderr.strip() or pull_proc.stdout.strip() or "Unable to fast-forward this repository"
        raise RuntimeError(message)

    return pull_proc.stdout.strip() or "Repository updated"


class SharedLibraryManagerHandler(SimpleHTTPRequestHandler):
    server_version = "SharedLibraryManager/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(MANAGER_DIR), **kwargs)

    @property
    def shared_root(self) -> Path:
        return self.server.shared_root  # type: ignore[attr-defined]

    @shared_root.setter
    def shared_root(self, value: Path) -> None:
        self.server.shared_root = value  # type: ignore[attr-defined]

    def log_message(self, format: str, *args) -> None:
        return

    def _read_json(self) -> dict:
        length = int(self.headers.get("Content-Length", "0"))
        payload = self.rfile.read(length) if length > 0 else b"{}"
        try:
            return json.loads(payload.decode("utf-8") or "{}")
        except json.JSONDecodeError as exc:
            raise RuntimeError(f"Invalid JSON body: {exc}") from exc

    def _send_json(self, payload: dict, status: int = 200) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/state":
            try:
                refresh = parse_qs(parsed.query).get("refresh", ["0"])[0] == "1"
                payload = refresh_bundled_assets(self.shared_root) if refresh else build_state_payload(self.shared_root)
                self._send_json({"ok": True, "state": payload})
            except Exception as exc:  # noqa: BLE001
                self._send_json({"ok": False, "message": str(exc)}, status=500)
            return
        super().do_GET()

    def do_POST(self) -> None:
        try:
            if self.path == "/api/refresh":
                state = refresh_bundled_assets(self.shared_root)
                self._send_json({"ok": True, "message": "Manager data refreshed", "state": state})
                return

            if self.path == "/api/open-folder":
                body = self._read_json()
                path = normalize_openable_path(body.get("path", ""))
                open_path(path)
                self._send_json({"ok": True, "message": f"Opened: {path}"})
                return

            if self.path == "/api/pick-directory":
                path = pick_directory()
                self._send_json({"ok": True, "path": str(path)})
                return

            if self.path == "/api/relocate-library":
                body = self._read_json()
                new_root = body.get("new_root")
                if not new_root:
                    raise RuntimeError("Missing new_root")
                proc = run(
                    [
                        sys.executable,
                        str(RELOCATE_SCRIPT),
                        "--current-root",
                        str(self.shared_root),
                        "--new-root",
                        str(new_root),
                    ]
                )
                if proc.returncode != 0:
                    raise RuntimeError(proc.stderr.strip() or proc.stdout.strip() or "Relocation failed")
                self.shared_root = configured_shared_root()
                state = refresh_bundled_assets(self.shared_root)
                self._send_json(
                    {
                        "ok": True,
                        "message": proc.stdout.strip() or "Shared library location updated",
                        "state": state,
                    }
                )
                return

            if self.path == "/api/update-container":
                body = self._read_json()
                container_name = str(body.get("container", "")).strip()
                if not container_name:
                    raise RuntimeError("Missing container name")
                message = update_container(self.shared_root, container_name)
                state = refresh_bundled_assets(self.shared_root)
                self._send_json({"ok": True, "message": message, "state": state})
                return

            self._send_json({"ok": False, "message": "Unknown endpoint"}, status=404)
        except Exception as exc:  # noqa: BLE001
            self._send_json({"ok": False, "message": str(exc)}, status=500)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the Shared Library Manager local server")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--shared-root", help="Optional shared library root override")
    parser.add_argument("--open-browser", action="store_true", help="Open the browser after the server starts")
    return parser.parse_args()


def main() -> None:
    ns = parse_args()
    shared_root = Path(ns.shared_root).expanduser().resolve() if ns.shared_root else active_shared_root()
    server = ThreadingHTTPServer((ns.host, ns.port), SharedLibraryManagerHandler)
    server.shared_root = shared_root  # type: ignore[attr-defined]
    url = f"http://{ns.host}:{ns.port}/"
    print(f"Shared Library Manager running at {url}")
    print(f"Active shared root: {shared_root}")

    if ns.open_browser:
        threading.Timer(0.5, lambda: webbrowser.open(url)).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
