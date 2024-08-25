.PHONY: all
all: init images dist
	mv ./dist/* ./docs/

.PHONY: clean
clean:
	rm -r ./dist | true
	rm -r ./docs | true

.PHONY: init
init:
	npm install
	mkdir -p docs/svg/examples/docs/
	mkdir -p docs/svg/examples/gallery/

.PHONY: svg
svg: dist/cli.js
	cat "$(FILE)" | node ./dist/cli.js | split -d -l 1 - "$(FILE)."
	ls "$(FILE)."* | xargs -I{} mv {} {}.svg

.PHONY: dist/cli.js
dist/cli.js:
	npm run build:cli

.PHONY: dist
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

.PHONY: images
images: dist/cli.js example-svg-all example-text-svg-all

.PHONY: example-svg-all
example-svg-all:
	find ./examples -type f -name \*.furumai -print0 \
	| xargs -0 -I{} sh ./scripts/gensvg.sh {}

.PHONY: example-text-svg-all
example-text-svg-all:
	find ./examples -type f -name \*.furumai -print0 \
  | xargs -0 -I{} sh -c 'node ./scripts/txt2svg.js < {} > ./docs/svg/{}.txt.svg'

.PHONY: parser
parser:
	java -jar antlr-4.13.1-complete.jar -Dlanguage=TypeScript -o src/generated/antlr4ts/ -visitor Furumai.g4

antlr-4.13.1-complete.jar:
	open https://www.antlr.org/download.html

src/generated/antlr4ts: Furumai.g4 antlr-4.13.1-complete.jar
	java -jar .antlr4/antlr-4.13.1-complete.jar -Dlanguage=TypeScript -o src/generated/antlr4ts/ -visitor Furumai.g4
