FROM nginx:latest

RUN apt-get update \
  && apt-get install -y unzip

ADD start.sh /bin/start.sh
RUN chmod +x /bin/start.sh
ADD default.ctmpl /templates/default.ctmpl

ADD https://releases.hashicorp.com/consul-template/0.14.0/consul-template_0.14.0_linux_amd64.zip /usr/bin/
RUN unzip /usr/bin/consul-template_0.14.0_linux_amd64.zip -d /usr/local/bin

EXPOSE 80
ENTRYPOINT ["/bin/start.sh"]
