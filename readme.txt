빌드(16진수 비번 나와야함)
docker build -t my-jenkins .

비번 확인
docker exec jenkins-server cat /var/jenkins_home/secrets/initialAdminPassword

윈도우용
docker run -d --name jenkins-server -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home my-jenkins

리눅스용
docker run -d \
--name jenkins-server \
-p 8080:8080 \
-p 50000:50000 \
-v jenkins_home:/var/jenkins_home \
my-jenkins

서버
http://localhost:8080

비번
(6/10)362e00e8f5a4434eb9d1f7dea9ddb2c4
(6/11)3c9b14bde8df405ba4838b4aa00edefe

연결 안될때
1. docker exec -u root -it jenkins bash
2. ls -l /var/run/docker.sock
3. chmod 666 /var/run/docker.sock

캐시가 안사라지면 순서대로 복붙(마지막에 docker ps -a해서 확인)
docker rm -f jenkins

docker rmi -f my-jenkins

docker volume rm jenkins_home

docker builder prune -af

docker system prune -af

docker build --no-cache -t my-jenkins .

docker run -d --name jenkins -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock --restart unless-stopped my-jenkins

docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

삭제 명령어(처음부터 다시 해야함)
docker rmi my-jenkins

컨테이너 들어가는 방법
docker exec -it jenkins-server bash

(들어간 다음에 칠 수 있는 명령어)

리눅스 확인
ls -al

도커 버전 확인
docker --version

==========================
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64" \
-o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose