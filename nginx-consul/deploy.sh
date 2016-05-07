docker build -t paulopez/nginx-consul .
docker rm -f nginx-consul
docker run --restart=always -d -p 80:80 \
  --name nginx-consul \
  -e "CONSUL_HTTP_ADDR=$(docker-machine ip consul):8500 " \
  -e "APP_NAME=quiz-ui" paulopez/nginx-consul
