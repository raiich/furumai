#!/usr/bin/env bash

SRC=$1
DST="${SRC}.generated."

node dist/cli/index.js < "${SRC}" | split -d -l 1 - "${DST}"
find . -print0 -name "${DST}\*" | xargs -I{} mv {} {}.svg