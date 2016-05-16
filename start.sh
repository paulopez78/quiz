#!/bin/bash
cd ./quiz-api-db/src
dotnet restore
dotnet publish

cd ../../
docker-compose build
docker-compose up
