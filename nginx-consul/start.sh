#!/bin/bash
service nginx start
consul-template \
-template="/templates/default.ctmpl:/etc/nginx/nginx.conf:service nginx reload || true"
