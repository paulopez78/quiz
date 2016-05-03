eval $(docker-machine env manager)
DOCKER_HOST=$(docker-machine ip manager):3376

cd ..
docker-compose up --build --force-recreate -d
docker-compose scale quiz-ui=5 quiz-api=5
docker-compose logs

cd swarm
./restart.sh
