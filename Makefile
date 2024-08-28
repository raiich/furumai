SRC := $(shell find src -name '*.ts')

.PHONY: app
app: init dist
	mkdir -p docs
	mv ./dist/* ./docs/

.PHONY: dist
dist: $(SRC) license-files resources/dependencies.json
	npm run build:prod

.PHONY: license-files
license-files: package-lock.json node_modules/antlr4/LICENSE.txt
	npm run -s license-checker | jq -r '.[].licenseFile' \
	| xargs -I{} sh ./scripts/copy-file.sh {}

node_modules/antlr4/LICENSE.txt: resources/antlr4/LICENSE.txt
	# copy unhandled license
	cp resources/antlr4/LICENSE.txt node_modules/antlr4/LICENSE.txt

resources/dependencies.json: package-lock.json
	npm run -s license-checker | jq 'del(.[]|.path)' > ./resources/dependencies.json

.PHONY: clean
clean:
	rm -r ./dist || true
	rm -r ./docs || true

.PHONY: init
init:
	npm install

.PHONY: images
images: dist/cli.js
	find ./examples -type f -name \*.furumai -print0 | xargs -0 -I{} make svg FILE={}

.PHONY: svg
svg: dist/cli.js
	make "$(FILE).generated.svg"

%.generated.svg: %
	sh ./scripts/gensvg.sh $^

dist/cli.js: $(SRC)
	npm run build:cli

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
