#!/usr/bin/env bash

find ./examples -type f -name \*.furumai -print0 \
| xargs -0 -I{} sh -c 'node ./tools/txt2svg.js < {} > ./docs/svg/{}.txt.svg'
