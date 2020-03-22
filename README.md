# Vendor Management Example
A fictional project to practice creating a fully functional application use a
variety of technologies such as Docker, Flyway, Postgesql, .NET Core, Java,
Node, React, and Angular.

## Prerequisites
The project assumes you have the following installed and configured locally:

- Docker v18+
- .NET Core v2.2
- JDK v11 (v8 would probably work just fine too)
- Maven v3.6
- Node.js v10.15

## Start up

### Database
To initialize and seed the database, execute the docker compose file in the infrastructure directory

```
docker-compose --f ./infrastructure/docker-compose.yml up
```

### Java
The Java API is a standard fair [Spring Boot](https://spring.io/projects/spring-boot) application, so the normal process applies. It uses Lombok for some automatic getter/setter action, so be sure to install any IDE extensions to enable support.
 - For VSCode: [Lombok Annotions Support for VS Code](https://marketplace.visualstudio.com/items?itemName=GabrielBB.vscode-lombok)
 - For Eclipse: Double click on the Lombok .jar in your .m2 directory after you have done an initial mvn clean install (~/.m2/repository/org/projectlombok/lombok/{version}/lombok-{version}.jar)
