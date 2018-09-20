# graphql-server
GraphQL server by NodeJS
Game: [godfink](https://github.com/rockerway/godfink)

Port: 80

---

## Install

`docker build -t graphql:godfink .`

## Server start

`docker run -it -v /root/node_modules -v ${PWD}:/root -p 80:80 graphql:godfink`