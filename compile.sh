#!/bin/bash
clang -O3 --target=wasm32 --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o client/test.wasm src/test.c
