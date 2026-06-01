# Stage 1 — Build the jar
FROM eclipse-temurin:24-jdk AS builder

WORKDIR /app

COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
COPY src ./src

RUN ./mvnw clean package -DskipTests

# Stage 2 — Run the jar
FROM eclipse-temurin:24-jdk

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]