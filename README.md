# Vendor Management Example

A fictional project to practice creating a fully functional application use a
variety of technologies such as Docker, Flyway, Postgesql, .NET Core, Java,
Node, and React.

## Prerequisites

The project assumes you have the following installed and configured locally:

- Docker v18+
- .NET Core v3.1+
- JDK v14 (v11 would probably work just fine too)
- Maven v3.6+
- Node.js v14+

## Build It

### UI (React)

It's a standard Create React App.

```
(cd ./ui/vendormgmt-react && npm i)
```

### Java

The Java API is a standard fair [Spring Boot](https://spring.io/projects/spring-boot) application using maven, so the normal process applies.

From the command line:

```
(cd ./api/java && mvn clean install)
```

### .NET

From the command line:
(cd ./api/net/VendorManagement && dotnet build)

## Start It

### Database

To initialize and seed the database, execute the docker compose file in the infrastructure directory

```
docker-compose --f ./infrastructure/docker-compose.yml up
```

### Java

The Java API is a standard fair [Spring Boot](https://spring.io/projects/spring-boot) application using maven, so the normal process applies.
From the command line:

```
(cd ./api/java && mvn spring-boot:run)
```

It uses Lombok for some automatic getter/setter action, so be sure to install any IDE extensions to enable support.
 - For VSCode: [Lombok Annotions Support for VS Code](https://marketplace.visualstudio.com/items?itemName=GabrielBB.vscode-lombok)
 - For Eclipse: Double click on the Lombok .jar in your .m2 directory after you have done an initial mvn clean install (~/.m2/repository/org/projectlombok/lombok/{version}/lombok-{version}.jar)

### .NET

The .NET API is also standard fair. Fire it up using the [dotnet CLI run command](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run)

```
(cd ./api/net/VendorManagement && dotnet run)
```

### UI (React)

From the command line:

```
(cd ./ui/vendormgmt-react && npm start)
```
