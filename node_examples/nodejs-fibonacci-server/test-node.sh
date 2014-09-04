#!/bin/bash
ab -n 10000 -c 50 -g node.tsv 'http://127.0.0.1:3000/100'

