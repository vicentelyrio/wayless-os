#!/bin/sh

set -e

WORK_DIR="$HOME/.config/wayless-os/src"
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
NC="\033[0m"

export G_MESSAGES_DEBUG=""
export MESA_DEBUG=""

ags run "$2" 2>/dev/null &

printf "${GREEN}[WATCHING]${NC}: %s\n" "$WORK_DIR"

ALLOWED_PATTERN='\.(tsx?|jsx?|scss|css|svg|json)$'

inotifywait -m "$WORK_DIR" -e create,modify,delete -r |
  while read -r path event filename; do
    if echo "$filename" | grep -qE "$ALLOWED_PATTERN"; then
      printf "${YELLOW}[RESTART]${NC} %s: received event '%s' for file '%s' at '%s'\n" "$1" "$event" "$filename" "$path"
      ags quit -i "$1"
      ags run "$2" 2>/dev/null &
    fi
  done
