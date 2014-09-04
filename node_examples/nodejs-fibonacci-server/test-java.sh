#!/bin/bash
ab -n 10000 -c 50 -g java.tsv 'http://localhost:8080/calculate/fibonacci?n=100'

