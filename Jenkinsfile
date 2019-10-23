pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building'
        sh 'npm install'
      }
    }
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'Testing'
            sh 'npm test'
          }
        }
        stage('no test') {
          agent {
            node {
              label 'nodestart'
            }

          }
          steps {
            sh 'sudo npm start'
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying'
        sh 'npm run dev'
      }
    }
  }
}