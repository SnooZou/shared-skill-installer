#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERSION_FILE="${ROOT}/VERSION"
SOURCE_FILE="${ROOT}/desktop/macos/SharedLibraryManagerApp.m"
JXA_SOURCE_FILE="${ROOT}/desktop/macos/SharedLibraryManagerApp.jxa.js"
ICON_SOURCE="${ROOT}/desktop/macos/assets/skill-manager-app-icon.png"
BUILD_ROOT="${ROOT}/.build/macos-manager-app"
APP_NAME="${APP_NAME:-Shared Skill Manager}"
APP_SLUG="${APP_SLUG:-${APP_NAME}.app}"
APP_DEST="${APP_DEST:-${HOME}/Applications/${APP_SLUG}}"
EXECUTABLE_NAME="SharedLibraryManager"
OPEN_AFTER=0
PRINT_PATH=0
QUIET=0
BUILD_MODE="${BUILD_MODE:-auto}"
ICON_READY=0

usage() {
  cat <<'EOF'
Usage:
  build-shared-library-manager-app.sh [--open] [--print-path] [--quiet]

Builds the macOS WebView shell app for Shared Skill Manager.

Environment overrides:
  APP_DEST=/path/to/Shared Skill Manager.app
  BUILD_MODE=auto|native|jxa
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

[ -x "/usr/bin/sips" ] || { echo "sips not found on this Mac." >&2; exit 1; }
[ -f "${ICON_SOURCE}" ] || { echo "Icon source not found: ${ICON_SOURCE}" >&2; exit 1; }
[ -f "${SOURCE_FILE}" ] || { echo "Source not found: ${SOURCE_FILE}" >&2; exit 1; }
[ -f "${JXA_SOURCE_FILE}" ] || { echo "JXA source not found: ${JXA_SOURCE_FILE}" >&2; exit 1; }

VERSION="$(cat "${VERSION_FILE}")"
SYSTEM_VERSION="$(printf '%s' "${VERSION}" | sed 's/^[^0-9]*//')"
if [ -z "${SYSTEM_VERSION}" ]; then
  SYSTEM_VERSION="1.0.0"
fi
APP_ID="com.snoozou.shared-skill-manager"
BUILD_APP="${BUILD_ROOT}/${APP_SLUG}"
ICON_OUTPUT="${BUILD_ROOT}/skill-manager.icns"

rm -rf "${BUILD_APP}"
rm -rf "${ICON_OUTPUT}"
mkdir -p "${BUILD_ROOT}" "$(dirname "${APP_DEST}")"

build_icon() {
  if python3 - "${ICON_SOURCE}" "${ICON_OUTPUT}" >/dev/null 2>&1 <<'PY'
import sys
from pathlib import Path

from PIL import Image

src = Path(sys.argv[1])
dest = Path(sys.argv[2])
img = Image.open(src)
img.save(dest)
PY
  then
    ICON_READY=1
    return 0
  fi

  if [ -x "/usr/bin/iconutil" ]; then
    local iconset_dir="${BUILD_ROOT}/skill-manager.iconset"
    rm -rf "${iconset_dir}"
    mkdir -p "${iconset_dir}"

    while read -r size filename; do
      /usr/bin/sips -z "${size}" "${size}" "${ICON_SOURCE}" --out "${iconset_dir}/${filename}" >/dev/null
    done <<'EOF'
16 icon_16x16.png
32 icon_16x16@2x.png
32 icon_32x32.png
64 icon_32x32@2x.png
128 icon_128x128.png
256 icon_128x128@2x.png
256 icon_256x256.png
512 icon_256x256@2x.png
512 icon_512x512.png
1024 icon_512x512@2x.png
EOF

    if /usr/bin/iconutil -c icns "${iconset_dir}" -o "${ICON_OUTPUT}" >/dev/null 2>&1; then
      ICON_READY=1
      return 0
    fi
  fi

  ICON_READY=0
  return 0
}

has_native_toolchain() {
  if [ ! -x "/usr/bin/xcrun" ]; then
    return 1
  fi
  local clang_path=""
  clang_path="$(xcrun --find clang 2>/dev/null || true)"
  if [ -z "${clang_path}" ] || [ ! -x "${clang_path}" ]; then
    return 1
  fi
  xcrun --sdk macosx --show-sdk-path >/dev/null 2>&1
}

build_native_app() {
  local clang_bin=""
  local macos_sdk=""
  clang_bin="$(xcrun --find clang)"
  macos_sdk="$(xcrun --sdk macosx --show-sdk-path)"

  mkdir -p "${BUILD_APP}/Contents/MacOS" "${BUILD_APP}/Contents/Resources"

  "${clang_bin}" \
    -fobjc-arc \
    -ObjC \
    -isysroot "${macos_sdk}" \
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
  if [ "${ICON_READY}" -eq 1 ]; then
    cp "${ICON_OUTPUT}" "${BUILD_APP}/Contents/Resources/skill-manager.icns"
    cp "${ICON_OUTPUT}" "${BUILD_APP}/Contents/Resources/applet.icns"
  fi
}

build_jxa_app() {
  [ -x "/usr/bin/osacompile" ] || {
    echo "osacompile not found on this Mac." >&2
    return 1
  }

  /usr/bin/osacompile -l JavaScript -o "${BUILD_APP}" "${JXA_SOURCE_FILE}" >/dev/null
  if [ "${ICON_READY}" -eq 1 ]; then
    cp "${ICON_OUTPUT}" "${BUILD_APP}/Contents/Resources/applet.icns"
  fi

  /usr/libexec/PlistBuddy -c "Set :CFBundleName ${APP_NAME}" "${BUILD_APP}/Contents/Info.plist" >/dev/null
  /usr/libexec/PlistBuddy -c "Add :CFBundleDisplayName string ${APP_NAME}" "${BUILD_APP}/Contents/Info.plist" >/dev/null 2>&1 || \
    /usr/libexec/PlistBuddy -c "Set :CFBundleDisplayName ${APP_NAME}" "${BUILD_APP}/Contents/Info.plist" >/dev/null
  /usr/libexec/PlistBuddy -c "Add :CFBundleIdentifier string ${APP_ID}" "${BUILD_APP}/Contents/Info.plist" >/dev/null 2>&1 || \
    /usr/libexec/PlistBuddy -c "Set :CFBundleIdentifier ${APP_ID}" "${BUILD_APP}/Contents/Info.plist" >/dev/null
  /usr/libexec/PlistBuddy -c "Add :CFBundleShortVersionString string ${SYSTEM_VERSION}" "${BUILD_APP}/Contents/Info.plist" >/dev/null 2>&1 || \
    /usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${SYSTEM_VERSION}" "${BUILD_APP}/Contents/Info.plist" >/dev/null
  /usr/libexec/PlistBuddy -c "Add :CFBundleVersion string ${SYSTEM_VERSION}" "${BUILD_APP}/Contents/Info.plist" >/dev/null 2>&1 || \
    /usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${SYSTEM_VERSION}" "${BUILD_APP}/Contents/Info.plist" >/dev/null
  /usr/libexec/PlistBuddy -c "Add :LSMinimumSystemVersion string 12.0" "${BUILD_APP}/Contents/Info.plist" >/dev/null 2>&1 || \
    /usr/libexec/PlistBuddy -c "Set :LSMinimumSystemVersion 12.0" "${BUILD_APP}/Contents/Info.plist" >/dev/null
}

build_icon

SELECTED_BUILD_MODE="${BUILD_MODE}"
if [ "${SELECTED_BUILD_MODE}" = "auto" ]; then
  if has_native_toolchain; then
    if build_native_app; then
      SELECTED_BUILD_MODE="native"
    else
      rm -rf "${BUILD_APP}"
      build_jxa_app
      SELECTED_BUILD_MODE="jxa"
    fi
  else
    build_jxa_app
    SELECTED_BUILD_MODE="jxa"
  fi
else
  case "${SELECTED_BUILD_MODE}" in
    native)
      if ! has_native_toolchain; then
        echo "Native macOS build requested, but clang/Xcode Command Line Tools are unavailable." >&2
        exit 1
      fi
      build_native_app
      ;;
    jxa)
      build_jxa_app
      ;;
    *)
      echo "Unsupported BUILD_MODE: ${BUILD_MODE}" >&2
      exit 1
      ;;
  esac
fi

rm -rf "${APP_DEST}"
ditto "${BUILD_APP}" "${APP_DEST}"
/usr/bin/codesign --force --deep --sign - "${APP_DEST}" >/dev/null 2>&1 || true
/usr/bin/xattr -dr com.apple.quarantine "${APP_DEST}" >/dev/null 2>&1 || true

if [ "${QUIET}" -ne 1 ]; then
  echo "Built Shared Skill Manager app:"
  echo "${APP_DEST}"
  echo "Build mode: ${SELECTED_BUILD_MODE}"
fi

if [ "${PRINT_PATH}" -eq 1 ]; then
  printf '%s\n' "${APP_DEST}"
fi

if [ "${OPEN_AFTER}" -eq 1 ]; then
  open "${APP_DEST}"
fi
