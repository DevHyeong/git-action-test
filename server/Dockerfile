FROM adoptopenjdk/openjdk11
CMD ["./gradlew", "clean", "build", "test"]
ARG jar_file=./server/build/libs/*.jar
COPY ${jar_file} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8080
