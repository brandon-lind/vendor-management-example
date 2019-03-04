# Vendor Management Example
A fictional project to practice creating a fully functional application use a 
variety of technologies such as Docker, Flyway, Postgesql, .NET Core, Java, 
Node, React, and Angular.

## Prerequisites
The project assumes you have the following installed and configured locally:

- Docker v18+
- .NET Core v2.2
- JDK v11 (8 would work just fine too)
- Node.js v10

# Start up
To initialize and seed the database, execute the docker compose file in the infrastructure directory

```
docker-compose --f ./infrastructure/docker-compose.yml up
```
