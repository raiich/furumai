#!/usr/bin/env bash

FILE="$1"
DIR=$(dirname "${FILE}")
mkdir -p ./dist/public/"${DIR}" && cp "${FILE}" ./dist/public/"${FILE}"
