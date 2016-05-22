#!/bin/bash
cd ./quiz-api-db/src
dotnet restore && dotnet publish
docker build -t paulopez/quiz-api-db:latest .
docker push paulopez/quiz-api-db

cd ../../quiz-worker
docker build -t paulopez/quiz-worker:latest .
docker push paulopez/quiz-worker

cd ../quiz-api
docker build -t paulopez/quiz-api:latest .
docker push paulopez/quiz-api

cd ../quiz-ui
docker build -t paulopez/quiz-ui:latest .
docker push paulopez/quiz-ui
