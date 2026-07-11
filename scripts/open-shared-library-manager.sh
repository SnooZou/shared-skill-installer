#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_SCRIPT="${ROOT}/scripts/shared-library-config.py"
SHARED_ROOT="${SHARED_ROOT:-$(python3 "${CONFIG_SCRIPT}" --get-root)}"

if [ "$(uname -s)" = "Darwin" ]; then
  if "${ROOT}/scripts/build-shared-library-manager-app.sh" --open; then
    exit 0
  fi
fi

exec python3 "${ROOT}/scripts/shared-library-manager-server.py" --shared-root "${SHARED_ROOT}" --open-browser
