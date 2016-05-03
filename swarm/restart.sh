eval $(docker-machine env loadbalancer)
docker exec interlock cat /etc/conf/nginx.conf
docker restart nginx
