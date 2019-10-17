pipeline {
  agent {
    label 'docker'
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