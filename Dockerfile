# Jenkins + Git + Node.js + Docker CLI

FROM jenkins/jenkins:lts

USER root

# Git 설치
RUN apt-get update && apt-get install -y git

# Node.js 설치 (22 LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

# Docker CLI 설치
RUN apt-get update && apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

RUN mkdir -p /etc/apt/keyrings

RUN curl -fsSL https://download.docker.com/linux/debian/gpg \
    | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

RUN echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/debian \
    $(. /etc/os-release && echo $VERSION_CODENAME) stable" \
    > /etc/apt/sources.list.d/docker.list

RUN apt-get update && apt-get install -y docker-ce-cli

# Jenkins Plugins
RUN jenkins-plugin-cli --plugins \
    git \
    github \
    workflow-aggregator \
    docker-workflow \
    nodejs

USER jenkins