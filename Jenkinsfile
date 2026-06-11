pipeline {
    agent any

    stages {

        stage('Git Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/본인아이디/저장소명.git'
            }
        }

        stage('Build & Deploy') {
            steps {
                sh '''
                    docker compose down
                    docker compose build --no-cache
                    docker compose up -d
                '''
            }
        }
    }
}