pipeline {
  agent any
  stages {
  stage('Build client'){
    dir("./client"){
        sh "npm install"
        sh "npm build"
        sh "cp ./build/* /var/www/html"
    }
  }
  }
}
