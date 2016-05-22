FROM microsoft/dotnet:core

ADD ./bin/Debug/netcoreapp1.0/publish /app
WORKDIR /app

EXPOSE 5000/tcp
ENTRYPOINT dotnet src.dll
