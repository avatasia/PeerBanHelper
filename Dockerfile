FROM --platform=$BUILDPLATFORM docker.io/maven:3.9.9-eclipse-temurin-21 as build

COPY . /build
WORKDIR /build
RUN cd webui && \
    npm i && \
    npm run build && \
    cd .. && \
    mv webui/dist src/main/resources/static && \
    mvn -B clean package --file pom.xml -T 1C

FROM docker.io/azul/zulu-openjdk-alpine:21.0.4-21.36-jre
LABEL maintainer="https://github.com/PBH-BTN/PeerBanHelper"
USER 0
ENV TZ=UTC
WORKDIR /app
VOLUME /tmp
COPY --from=build build/target/PeerBanHelper.jar /app/PeerBanHelper.jar
ENV PATH="${JAVA_HOME}/bin:${PATH}"
ENTRYPOINT ["java","-Xmx386M","-XX:+UseG1GC", "-XX:+UseStringDeduplication","-XX:+ShrinkHeapInSteps","-jar","PeerBanHelper.jar"]
