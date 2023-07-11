FROM gradle:8.2 as server_build
COPY --chown=gradle:gradle . /app
WORKDIR /app
RUN ./gradlew clean build test

FROM adoptopenjdk/openjdk11

#RUN ./gradlew clean build test
#ARG jar_file=build/libs/server-0.0.1-SNAPSHOT.jar
#COPY ${jar_file} app.jar

COPY --from=server_build /app/build/libs/app.jar .
ENTRYPOINT ["java", "-jar", "app.jar"]
EXPOSE 8080


