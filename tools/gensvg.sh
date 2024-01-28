#!/usr/bin/env bash

SRC=$1
DST="${SRC}.generated"

node dist/cli/index.js < "${SRC}" | split -d -l 1 - "${DST}."
ls "${DST}".* | xargs -I{} mv {} {}.svg
