#!/bin/bash
cd ./quiz-api-db/src

docker run -it \
  -v $(pwd):/app \
  -w /app  \
  microsoft/dotnet:latest \
  sh -c 'dotnet restore && dotnet publish'

cd ../..
docker-compose up --build --force-recreate
