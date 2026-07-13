#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERSION_FILE="${ROOT}/VERSION"
SOURCE_FILE="${ROOT}/desktop/macos/SharedLibraryManagerApp.jxa.js"
ICON_SOURCE="${ROOT}/desktop/macos/assets/skill-manager-app-icon.png"
BUILD_ROOT="${ROOT}/.build/macos-manager-app"
APP_NAME="${APP_NAME:-Shared Library Manager}"
APP_SLUG="${APP_SLUG:-${APP_NAME}.app}"
APP_DEST="${APP_DEST:-${HOME}/Applications/${APP_SLUG}}"
OPEN_AFTER=0
PRINT_PATH=0
QUIET=0

usage() {
  cat <<'EOF'
Usage:
  build-shared-library-manager-app.sh [--open] [--print-path] [--quiet]

Builds the macOS WebView shell app for Shared Library Manager.

Environment overrides:
  APP_DEST=/path/to/Shared Library Manager.app
EOF
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --open)
      OPEN_AFTER=1
      ;;
    --print-path)
      PRINT_PATH=1
      ;;
    --quiet)
      QUIET=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
  shift
done

if [ "$(uname -s)" != "Darwin" ]; then
  echo "Shared Library Manager.app build is only supported on macOS." >&2
  exit 1
fi

[ -x "/usr/bin/osacompile" ] || { echo "osacompile not found on this Mac." >&2; exit 1; }
[ -x "/usr/bin/sips" ] || { echo "sips not found on this Mac." >&2; exit 1; }
[ -f "${SOURCE_FILE}" ] || { echo "Source not found: ${SOURCE_FILE}" >&2; exit 1; }
[ -f "${ICON_SOURCE}" ] || { echo "Icon source not found: ${ICON_SOURCE}" >&2; exit 1; }

VERSION="$(cat "${VERSION_FILE}")"
APP_ID="com.snoozou.shared-library-manager"
BUILD_APP="${BUILD_ROOT}/${APP_SLUG}"
ICONSET_DIR="${BUILD_ROOT}/skill-manager.iconset"
ICON_OUTPUT="${BUILD_ROOT}/skill-manager.icns"

rm -rf "${BUILD_APP}"
rm -rf "${ICONSET_DIR}" "${ICON_OUTPUT}"
mkdir -p "${BUILD_ROOT}" "$(dirname "${APP_DEST}")" "${ICONSET_DIR}"

python3 - "${ICON_SOURCE}" "${ICON_OUTPUT}" <<'PY'
import sys
from pathlib import Path

try:
    from PIL import Image
except Exception as exc:  # pragma: no cover
    raise SystemExit(f"Pillow is required to build the macOS app icon: {exc}")

src = Path(sys.argv[1])
dest = Path(sys.argv[2])
img = Image.open(src)
img.save(dest)
print(dest)
PY

/usr/bin/osacompile -l JavaScript -o "${BUILD_APP}" "${SOURCE_FILE}"
/usr/bin/plutil -replace CFBundleIdentifier -string "${APP_ID}" "${BUILD_APP}/Contents/Info.plist"
/usr/bin/plutil -replace CFBundleName -string "${APP_NAME}" "${BUILD_APP}/Contents/Info.plist"
/usr/bin/plutil -replace CFBundleDisplayName -string "${APP_NAME}" "${BUILD_APP}/Contents/Info.plist"
/usr/bin/plutil -replace CFBundleShortVersionString -string "${VERSION}" "${BUILD_APP}/Contents/Info.plist"
/usr/bin/plutil -replace CFBundleVersion -string "${VERSION}" "${BUILD_APP}/Contents/Info.plist"
/usr/bin/plutil -replace LSMinimumSystemVersion -string "12.0" "${BUILD_APP}/Contents/Info.plist"
/usr/bin/plutil -replace CFBundleIconFile -string "skill-manager.icns" "${BUILD_APP}/Contents/Info.plist"
cp "${ICON_OUTPUT}" "${BUILD_APP}/Contents/Resources/skill-manager.icns"

rsync -a --delete "${BUILD_APP}/" "${APP_DEST}/"

if [ "${QUIET}" -ne 1 ]; then
  echo "Built Shared Library Manager app:"
  echo "${APP_DEST}"
fi

if [ "${PRINT_PATH}" -eq 1 ]; then
  printf '%s\n' "${APP_DEST}"
fi

if [ "${OPEN_AFTER}" -eq 1 ]; then
  open "${APP_DEST}"
fi
