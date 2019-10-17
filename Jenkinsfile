pipeline {
  agent {
    docker {
      image 'node:lts-slim'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker-compose build'
      }
    }
    stage('Finish') {
      steps {
        sh 'echo "FINISHED BUILDING"'
      }
    }
  }
}