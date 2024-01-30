#!/usr/bin/env bash

SRC=$1
DST="${SRC}.generated"

rm "${DST}".*
node dist/cli/index.js < "${SRC}" | split -d -l 1 - "${DST}."
ls "${DST}".* | xargs -I{} mv {} {}.svg
