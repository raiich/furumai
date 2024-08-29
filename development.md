# Development

## Build & deploy web app

```shell
make clean
make init
make app
git push origin HEAD
```

## Generate SVG by cli

```shell
make svg FILE=examples/docs/basic-shapes.furumai
```

## Update SVGs in examples/*

```shell
make images
```

## Update README.md

```shell
make README.md
make README.ja.md
```

## Update syntax

```shell
# after edit Furumai.g4
make parser
```
