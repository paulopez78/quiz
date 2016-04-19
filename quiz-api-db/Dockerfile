FROM microsoft/aspnet:1.0.0-rc1-update1-coreclr

COPY ./src/bin/output/approot /app
WORKDIR /app

EXPOSE 5000/tcp
ENTRYPOINT ./web --server.urls "http://0.0.0.0:5000"
