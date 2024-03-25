 run docker network create -d bridge mybridgenetwork

install mongo db
docker run --network=mybridgenetwork --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:latest

or run dockercompose up
