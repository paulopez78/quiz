export SWARM_HOST=tcp://$(docker-machine ip manager):3376

eval $(docker-machine env loadbalancer)
docker rm -f $(docker ps -qa)
docker-compose up
