#!/bin/bash
cd ./quiz-api-db/src
dnu restore
dnu publish

cd ..
docker build -t paulopez/quiz-api-db:latest .
docker push paulopez/quiz-api-db

cd ../quiz-api
docker build -t paulopez/quiz-api:latest .
docker push paulopez/quiz-api

cd ../quiz-ui
docker build -t paulopez/quiz-ui:latest .
docker push paulopez/quiz-ui
