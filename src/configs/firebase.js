import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCloHV48iEU7_-E9QtWpyQQzcPrwLSeP-c",
    authDomain: "gochat-1c6be.firebaseapp.com",
    databaseURL: "https://gochat-1c6be.firebaseio.com",
    projectId: "gochat-1c6be",
    storageBucket: "gochat-1c6be.appspot.com",
    messagingSenderId: "168424672145",
    appId: "1:168424672145:web:6cf0ce66fe00420465a830"
  };

  firebase.initializeApp(firebaseConfig)



  export {firebase}