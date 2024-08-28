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

dist/cli.js: $(shell find src -name '*.ts')
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
images: dist/cli.js
	find ./examples -type f -name \*.furumai -print0 | xargs -0 -I{} sh ./scripts/gensvg.sh {}

ANTLR_JAR := antlr-4.13.1-complete.jar
ANTLR_OUT := src/generated/antlr4ts

.PHONY: parser
parser: Furumai.g4 $(ANTLR_JAR) $(ANTLR_OUT)
	java -jar $(ANTLR_JAR) -Dlanguage=TypeScript -o $(ANTLR_OUT) -visitor Furumai.g4

$(ANTLR_JAR):
	open https://www.antlr.org/download.html

$(ANTLR_OUT):
	mkdir -p $(ANTLR_OUT)

%.md: %.template.md
	cat $^ | node scripts/readmegen.js > $@
