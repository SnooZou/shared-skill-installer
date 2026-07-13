#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERSION_FILE="${ROOT}/VERSION"
SOURCE_FILE="${ROOT}/desktop/macos/SharedLibraryManagerApp.m"
ICON_SOURCE="${ROOT}/desktop/macos/assets/skill-manager-app-icon.png"
BUILD_ROOT="${ROOT}/.build/macos-manager-app"
APP_NAME="${APP_NAME:-Shared Skill Manager}"
APP_SLUG="${APP_SLUG:-${APP_NAME}.app}"
APP_DEST="${APP_DEST:-${HOME}/Applications/${APP_SLUG}}"
EXECUTABLE_NAME="SharedLibraryManager"
OPEN_AFTER=0
PRINT_PATH=0
QUIET=0

usage() {
  cat <<'EOF'
Usage:
  build-shared-library-manager-app.sh [--open] [--print-path] [--quiet]

Builds the macOS WebView shell app for Shared Skill Manager.

Environment overrides:
  APP_DEST=/path/to/Shared Skill Manager.app
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
  echo "Shared Skill Manager.app build is only supported on macOS." >&2
  exit 1
fi

[ -x "$(xcrun --find clang 2>/dev/null)" ] || { echo "clang not found on this Mac." >&2; exit 1; }
[ -x "/usr/bin/sips" ] || { echo "sips not found on this Mac." >&2; exit 1; }
[ -f "${SOURCE_FILE}" ] || { echo "Source not found: ${SOURCE_FILE}" >&2; exit 1; }
[ -f "${ICON_SOURCE}" ] || { echo "Icon source not found: ${ICON_SOURCE}" >&2; exit 1; }

VERSION="$(cat "${VERSION_FILE}")"
SYSTEM_VERSION="$(printf '%s' "${VERSION}" | sed 's/^[^0-9]*//')"
if [ -z "${SYSTEM_VERSION}" ]; then
  SYSTEM_VERSION="1.0.0"
fi
APP_ID="com.snoozou.shared-skill-manager"
BUILD_APP="${BUILD_ROOT}/${APP_SLUG}"
ICON_OUTPUT="${BUILD_ROOT}/skill-manager.icns"
CLANG_BIN="$(xcrun --find clang)"
MACOS_SDK="$(xcrun --sdk macosx --show-sdk-path)"

rm -rf "${BUILD_APP}"
rm -rf "${ICON_OUTPUT}"
mkdir -p "${BUILD_ROOT}" "$(dirname "${APP_DEST}")"
mkdir -p "${BUILD_APP}/Contents/MacOS" "${BUILD_APP}/Contents/Resources"

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

"${CLANG_BIN}" \
  -fobjc-arc \
  -ObjC \
  -isysroot "${MACOS_SDK}" \
  -target "arm64-apple-macos12.0" \
  -framework AppKit \
  -framework WebKit \
  "${SOURCE_FILE}" \
  -o "${BUILD_APP}/Contents/MacOS/${EXECUTABLE_NAME}"

cat > "${BUILD_APP}/Contents/Info.plist" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleDevelopmentRegion</key>
  <string>en</string>
  <key>CFBundleDisplayName</key>
  <string>${APP_NAME}</string>
  <key>CFBundleExecutable</key>
  <string>${EXECUTABLE_NAME}</string>
  <key>CFBundleIdentifier</key>
  <string>${APP_ID}</string>
  <key>CFBundleInfoDictionaryVersion</key>
  <string>6.0</string>
  <key>CFBundleName</key>
  <string>${APP_NAME}</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>CFBundleShortVersionString</key>
  <string>${SYSTEM_VERSION}</string>
  <key>CFBundleVersion</key>
  <string>${SYSTEM_VERSION}</string>
  <key>CFBundleIconFile</key>
  <string>skill-manager</string>
  <key>CFBundleIconName</key>
  <string>skill-manager</string>
  <key>LSMinimumSystemVersion</key>
  <string>12.0</string>
  <key>NSHighResolutionCapable</key>
  <true/>
</dict>
</plist>
EOF

printf 'APPL????' > "${BUILD_APP}/Contents/PkgInfo"
cp "${ICON_OUTPUT}" "${BUILD_APP}/Contents/Resources/skill-manager.icns"
cp "${ICON_OUTPUT}" "${BUILD_APP}/Contents/Resources/applet.icns"

rm -rf "${APP_DEST}"
ditto "${BUILD_APP}" "${APP_DEST}"
/usr/bin/codesign --force --deep --sign - "${APP_DEST}" >/dev/null 2>&1 || true
/usr/bin/xattr -dr com.apple.quarantine "${APP_DEST}" >/dev/null 2>&1 || true

if [ "${QUIET}" -ne 1 ]; then
  echo "Built Shared Skill Manager app:"
  echo "${APP_DEST}"
fi

if [ "${PRINT_PATH}" -eq 1 ]; then
  printf '%s\n' "${APP_DEST}"
fi

if [ "${OPEN_AFTER}" -eq 1 ]; then
  open "${APP_DEST}"
fi
