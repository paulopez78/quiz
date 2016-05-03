DOCKER_HOST=$(docker-machine ip manager):3376

cd ..
docker-compose restart
docker-compose build
docker-compose up
