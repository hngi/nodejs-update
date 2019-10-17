node{
  def image = 'ubuntu/hng6-devops4'
  stage('SCM Checkout'){
    git 'https://github.com/hngi/nodejs-update.git'
  }
  stage('Build Application'){
    sh "docker-compose build"
  }
  stage('Run Application'){
    sh "docker-compose up"
  }
}