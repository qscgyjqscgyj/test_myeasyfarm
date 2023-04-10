#!/bin/sh

docker-compose -f docker-compose.yaml up --build -d

cd client
yarn start
exit $?
