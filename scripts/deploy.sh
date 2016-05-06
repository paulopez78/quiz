eval $(docker-machine env loadbalancer)
cd loadbalancer
SWARM_HOST=$(docker-machine ip manager):3376 docker-compose up --force-recreate -d

cd ../..
eval $(docker-machine env manager)
DOCKER_HOST=$(docker-machine ip manager):3376
docker-compose up --force-recreate -d
