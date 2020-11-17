# Difference Calculator

[![Maintainability](https://api.codeclimate.com/v1/badges/3d9f1de109de71750666/maintainability)](https://codeclimate.com/github/Vanger-Li/frontend-project-lvl2/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/3d9f1de109de71750666/test_coverage)](https://codeclimate.com/github/Vanger-Li/frontend-project-lvl2/test_coverage)  ![Build Status](https://github.com/Vanger-Li/frontend-project-lvl2/workflows/Node.js%20CI/badge.svg)

Difference Calculator is a cli utility compares two configuration files and shows a difference.

## Install ##

Clone this repo and run:
```
make install
make link
```

## Program launch
### Comparison of flat files:

```sh
$ gendiff filepath1.json filepath2.json
```
[![asciicast](https://asciinema.org/a/QYalfvLWaQLo6cEb55kpzSMnT.svg)](https://asciinema.org/a/QYalfvLWaQLo6cEb55kpzSMnT)

```sh
$ gendiff filepath1.yml filepath2.yml
```
[![asciicast](https://asciinema.org/a/dbG6dQ4UkqfYOHSboCYePxK8u.svg)](https://asciinema.org/a/dbG6dQ4UkqfYOHSboCYePxK8u)

### Comparison of files with a nested structure:

```sh
$ gendiff file1.json file2.json
$ gendiff --format stylish file1.json file2.json
```
[![asciicast](https://asciinema.org/a/g7kFnIKkTIfutRHHbp5QE7ABM.svg)](https://asciinema.org/a/g7kFnIKkTIfutRHHbp5QE7ABM)

```sh
$ gendiff --format plain file1.json file2.json 
```
[![asciicast](https://asciinema.org/a/DtVDCTiyPJ1Q1f1ZkZfqXKCmG.svg)](https://asciinema.org/a/DtVDCTiyPJ1Q1f1ZkZfqXKCmG)

```sh
$ gendiff --format json file1.json file2.json  
```
[![asciicast](https://asciinema.org/a/Hk5dxzgfDKjF2nn4qXeLwH1xC.svg)](https://asciinema.org/a/Hk5dxzgfDKjF2nn4qXeLwH1xC)