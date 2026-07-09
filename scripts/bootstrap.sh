#!/usr/bin/env bash

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_SCRIPT="${REPO_ROOT}/scripts/shared-library-config.py"
SHARED_ROOT="${SHARED_ROOT:-$(python3 "${CONFIG_SCRIPT}" --get-root)}"
STATE_ROOT="${SHARED_ROOT}/.shared-skill-state"
PACKAGE_DEST="${SHARED_ROOT}/shared-skill-installer"

copy_if_missing() {
  local src="$1"
  local dest="$2"
  if [ ! -e "$dest" ]; then
    mkdir -p "$(dirname "$dest")"
    cp "$src" "$dest"
  fi
}

mkdir -p "${SHARED_ROOT}" "${STATE_ROOT}" "${SHARED_ROOT}/bin"

rsync -a --delete --exclude '.git' --exclude '.DS_Store' "${REPO_ROOT}/" "${PACKAGE_DEST}/"

cp "${REPO_ROOT}/scripts/install-shared-skill" "${SHARED_ROOT}/bin/install-shared-skill"
chmod 755 "${SHARED_ROOT}/bin/install-shared-skill"

copy_if_missing "${REPO_ROOT}/state/client-roots.tsv" "${STATE_ROOT}/client-roots.tsv"
copy_if_missing "${REPO_ROOT}/state/shared-skill-installer.skillmap.tsv" "${STATE_ROOT}/shared-skill-installer.skillmap.tsv"

export STATE_ROOT
python3 - <<'PY'
import os
from pathlib import Path

state_root = Path(os.path.expanduser(os.path.expandvars(os.environ["STATE_ROOT"])))
client_roots = state_root / "client-roots.tsv"
rows = []
with client_roots.open() as fh:
    for line in fh:
        line = line.rstrip("\n")
        if not line or line.lstrip().startswith("#"):
            continue
        label, path = line.split("\t", 1)
        expanded = os.path.abspath(os.path.expanduser(os.path.expandvars(path)))
        rows.append((label, expanded))
for _, expanded in rows:
    Path(expanded).mkdir(parents=True, exist_ok=True)
PY

SHARED_ROOT="${SHARED_ROOT}" PACKAGE_ROOT="${PACKAGE_DEST}" "${SHARED_ROOT}/bin/install-shared-skill" --reconcile-library
python3 "${CONFIG_SCRIPT}" --set-root "${SHARED_ROOT}" >/dev/null

cat <<EOF
Bootstrap complete.
Shared library: ${SHARED_ROOT}
Skill package:   ${PACKAGE_DEST}
Client roots:    ${STATE_ROOT}/client-roots.tsv
Manager UI:      ${PACKAGE_DEST}/manager/index.html
Manager server:  ${PACKAGE_DEST}/scripts/open-shared-library-manager.sh

Restart local clients if they do not hot-reload the new skill.
EOF
