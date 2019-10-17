node{
  def image = 'ubuntu/hng6-devops4'
  stage('SCM Checkout'){
    git 'https://github.com/mikeattara/frontend-docker-sample.git'
  }
  stage('Build Docker Image'){
    sh "docker build -t ${image} ."
  }
  stage('Run Docker Image'){
    def name = 'fe-app'
    try{
      sh "docker run -d --name ${name} ${image}"
    }catch(Exception e){
      sh "docker stop ${name}"
      sh "docker rm ${name}"
      sh "docker run -p 5000:5000 -d --name ${name} ${image}"
    } 
  }
}