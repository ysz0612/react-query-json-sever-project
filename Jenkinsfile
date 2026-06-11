pipeline {
    agent any

    stages {

        stage('Git Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/ysz0612/react-query-json-sever-project.git'
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