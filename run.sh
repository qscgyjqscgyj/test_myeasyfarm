#!/bin/sh

docker-compose -f docker-compose.yaml up --build -d

cd client
npm install
npm run start
exit $?
