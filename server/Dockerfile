FROM adoptopenjdk/openjdk11
ARG jar_file=build/libs/demo-0.0.1-SNAPSHOT.jar
COPY ${jar_file} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8080