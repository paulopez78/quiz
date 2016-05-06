#!/bin/bash

# REMOVE MACHINES
docker-machine rm -y keystore manager loadbalancer agent01 agent02

# PROVISION KEYSTORE
docker-machine create -d virtualbox --engine-opt="label=com.function=consul"  keystore

# PROVISION MANAGER
docker-machine create -d virtualbox \
--engine-opt="label=com.function=manager" \
--engine-opt="cluster-store=consul://$(docker-machine ip keystore):8500" \
--engine-opt="cluster-advertise=eth1:2376" manager

# PROVISION LOAD BALANCER
docker-machine create -d virtualbox \
--engine-opt="label=com.function=interlock" loadbalancer

# PROVISION NODE1
docker-machine create -d virtualbox \
--engine-opt="cluster-store=consul://$(docker-machine ip keystore):8500" \
--engine-opt="cluster-advertise=eth1:2376" agent01

# PROVISION NODE2
docker-machine create -d virtualbox \
--engine-opt="cluster-store=consul://$(docker-machine ip keystore):8500" \
--engine-opt="cluster-advertise=eth1:2376" agent02

# Run consul
eval $(docker-machine env keystore)
docker run --restart=unless-stopped -d -p 8500:8500 -h consul progrium/consul -server -bootstrap

# Run Swarm master
eval $(docker-machine env manager)
docker run --restart=unless-stopped -d -p 3376:2375 \
-v /var/lib/boot2docker:/certs:ro \
swarm manage --tlsverify \
--tlscacert=/certs/ca.pem \
--tlscert=/certs/server.pem \
--tlskey=/certs/server-key.pem \
consul://$(docker-machine ip keystore):8500

# Run swarm node1
eval $(docker-machine env agent01)
docker run -d swarm join --addr=$(docker-machine ip agent01):2376 consul://$(docker-machine ip keystore):8500

# Run swarm node2
eval $(docker-machine env agent02)
docker run -d swarm join --addr=$(docker-machine ip agent02):2376 consul://$(docker-machine ip keystore):8500
