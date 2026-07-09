#!/usr/bin/env bash

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CONFIG_SCRIPT="${ROOT}/scripts/shared-library-config.py"
SHARED_ROOT="${SHARED_ROOT:-$(python3 "${CONFIG_SCRIPT}" --get-root)}"
CLIENTS_FILE="${CLIENTS_FILE:-${SHARED_ROOT}/.shared-skill-state/client-roots.tsv}"

expand_path() {
  python3 - "$1" <<'PY'
import os
import sys
print(os.path.abspath(os.path.expanduser(os.path.expandvars(sys.argv[1]))))
PY
}

usage() {
  echo "Usage: verify-shared-links.sh <skill-name>"
}

[ "$#" -eq 1 ] || {
  usage
  exit 1
}

SKILL_NAME="$1"
FIRST_TARGET=""

emit_client_roots() {
  if [ -f "${CLIENTS_FILE}" ]; then
    awk 'NF && $0 !~ /^[[:space:]]*#/' "${CLIENTS_FILE}"
  else
    cat <<EOF
codex	\${HOME}/.codex/skills
workbuddy	\${HOME}/.workbuddy/skills
trae	\${HOME}/.trae/skills
EOF
  fi
}

while IFS=$'\t' read -r client_name client_root; do
  [ -n "${client_name}" ] || continue
  case "${client_name}" in
    \#*) continue ;;
  esac

  client_root="$(expand_path "${client_root}")"

  LINK_PATH="${client_root}/${SKILL_NAME}"
  if [ -L "${LINK_PATH}" ]; then
    TARGET="$(readlink "${LINK_PATH}")"
    printf '%s\t%s\t%s\n' "${client_name}" "linked" "${TARGET}"
    if [ -z "${FIRST_TARGET}" ]; then
      FIRST_TARGET="${TARGET}"
    fi
  elif [ -e "${LINK_PATH}" ]; then
    printf '%s\t%s\t%s\n' "${client_name}" "exists-not-symlink" "${LINK_PATH}"
  else
    printf '%s\t%s\t%s\n' "${client_name}" "missing" "${LINK_PATH}"
  fi
done < <(emit_client_roots)

if [ -n "${FIRST_TARGET}" ] && [ -e "${FIRST_TARGET}" ]; then
  du -sh "${FIRST_TARGET}"
fi
