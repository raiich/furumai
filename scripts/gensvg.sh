#!/usr/bin/env bash

set -ex
SRC=${1:?'Missing input file'}
DST=${DST:-"${SRC}.generated"}

rm "${DST}".* || true
node dist/cli.js < "${SRC}" | split -d -l 1 - "${DST}."
ls "${DST}".* | xargs -I{} mv {} {}.svg
