#!/bin/bash

# REMOVE MACHINES
docker-machine rm -y consul manager agent01 agent02

# PROVISION CONSUL
docker-machine create -d virtualbox --engine-opt="label=com.function=consul"  consul
eval $(docker-machine env consul)
docker run --restart=always -d -p 8500:8500 -h consul progrium/consul -server -bootstrap
docker run --restart=always -d -p 80:80 \
  --name nginx-consul \
  -e "CONSUL_HTTP_ADDR=$(docker-machine ip consul):8500 " \
  -e "APP_NAME=quiz-ui" paulopez/nginx-consul

consul="consul://"$(docker-machine ip consul)":8500"
echo $consul

# PROVISION MANAGER
docker-machine create -d virtualbox \
--swarm \
--swarm-master \
--swarm-discovery="$consul" \
--engine-opt="cluster-store=$consul" \
--engine-opt="cluster-advertise=eth1:2376" \
manager

# PROVISION NODES
nodes=(agent01 agent02)
for host in ${nodes[@]}; do
  echo ${host}
  docker-machine create -d virtualbox \
  --swarm \
  --swarm-discovery="$consul" \
  --engine-opt="cluster-store=$consul" \
  --engine-opt="cluster-advertise=eth1:2376" \
  --engine-label host=app-server \
  ${host}
done

# RUN REGISTRATOR
hosts=(manager agent01 agent02)
for host in ${hosts[@]}; do
        eval $(docker-machine env ${host})
  docker run -d \
    --name=registrator \
    -h $(docker-machine ip ${host}) \
    -v=/var/run/docker.sock:/tmp/docker.sock \
    gliderlabs/registrator \
    -ip $(docker-machine ip ${host}) $consul
done

eval $(docker-machine env --swarm manager)
docker-compose -f docker-compose-swarm.yml up --force-recreate -d
echo 'add to /etc/hosts ' $(docker-machine ip consul) 'quiz-ui'
