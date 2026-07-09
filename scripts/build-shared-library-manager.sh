#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_SCRIPT="${ROOT}/scripts/shared-library-config.py"
SHARED_ROOT="${SHARED_ROOT:-$(python3 "${CONFIG_SCRIPT}" --get-root)}"
OUT_DIR="${ROOT}/manager/data"
ICON_DIR="${ROOT}/manager/assets/clients"

mkdir -p "$OUT_DIR"
mkdir -p "$ICON_DIR"

python3 "${ROOT}/scripts/export-shared-library-state.py" \
  --shared-root "${SHARED_ROOT}" \
  --package-root "${ROOT}" \
  --output "${OUT_DIR}/library-state.js" \
  --format js

python3 "${ROOT}/scripts/extract-client-icons.py" \
  --shared-root "${SHARED_ROOT}" \
  --output-dir "${ICON_DIR}" \
  --manifest "${OUT_DIR}/client-icons.js"

echo "Updated manager data: ${OUT_DIR}/library-state.js"
echo "Updated client icons: ${OUT_DIR}/client-icons.js"
