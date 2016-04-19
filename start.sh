#!/bin/bash
cd ./quiz-api-db/src
dnu restore
dnu publish

cd ../../
docker-compose build
docker-compose up
