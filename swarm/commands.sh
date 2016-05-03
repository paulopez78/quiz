# check interlock updates
docker exec interlock cat /etc/conf/nginx.conf

# connect to swarm master
DOCKER_HOST=$(docker-machine ip manager):3376
