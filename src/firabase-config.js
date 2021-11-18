import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyCZ09dezv0JOEH5tvpXQ48oYMM4MC7SiG4',
  authDomain: 'new-project-dc289.firebaseapp.com',
  databaseURL: 'https://new-project-dc289-default-rtdb.firebaseio.com',
  projectId: 'new-project-dc289',
  storageBucket: 'new-project-dc289.appspot.com',
  messagingSenderId: '861882605967',
  appId: '1:861882605967:web:8bf2c303d75c9121bf6bfa'
})

firebase.auth().languageCode = 'ru'

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const githubProvider = new firebase.auth.GithubAuthProvider()