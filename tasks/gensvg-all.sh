#!/usr/bin/env bash

find ./examples -type f -name \*.furumai -print0 \
| xargs -0 -I{} sh ./tools/gensvg.sh {}
