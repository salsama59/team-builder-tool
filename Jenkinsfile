pipeline {

  agent any
  
  stages {
    stage('Install dependencies') {
      steps { sh 'npm install' }
    }
    stage('Code quality') {
        steps { sh 'npm run-script lint' }
    }
    stage('Tests') {
      parallel {
        stage('Unit tests') {
            steps { sh 'npm run-script test' }
        }
        stage('End to end tests') {
            steps { sh 'npm run-script e2e' }
        }
      }
    }
    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}