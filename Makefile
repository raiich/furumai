.PHONY: all
all: init dist
	mv ./dist/* .docs/

.PHONY: init
init:
	npm install

# .PHONY: dist
dist: resources/dependencies.json license-files
	npm run build:prod

.PHONY: resources/dependencies.json
resources/dependencies.json:
	npm run -s license-checker | jq 'del(.[]|.path)' > ./resources/dependencies.json

.PHONY: license-files
license-files: antlr4-license
	npm run -s license-checker | jq -r '.[].licenseFile' \
	| xargs -I{} sh ./scripts/copy-file.sh {}

.PHONY: antlr4-license
antlr4-license:
	# copy unhandled license
	cp ./resources/antlr4/LICENSE.txt  ./node_modules/antlr4/LICENSE.txt

.PHONY: svg
svg: dist/cli.js
	cat "$(FILE)" | node ./dist/cli.js | split -d -l 1 - "$(FILE)."
	ls "$(FILE)."* | xargs -I{} mv {} {}.svg

dist/cli.js:
	npm run build:cli

.PHONY: example-svg-all
example-svg-all: dist/cli.js
	find ./examples -type f -name \*.furumai -print0 \
	| xargs -0 -I{} sh ./scripts/gensvg.sh {}

.PHONY: example-text-svg-all
example-text-svg-all:
	find ./examples -type f -name \*.furumai -print0 \
  | xargs -0 -I{} sh -c 'node ./scripts/txt2svg.js < {} > ./docs/svg/{}.txt.svg'