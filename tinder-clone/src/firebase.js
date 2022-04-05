import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDgF7etgNDy1UbB0wMCB1CESHdFLmU0OLk",
    authDomain: "tinder-firebase-clone-2d7f7.firebaseapp.com",
    projectId: "tinder-firebase-clone-2d7f7",
    storageBucket: "tinder-firebase-clone-2d7f7.appspot.com",
    messagingSenderId: "648629200745",
    appId: "1:648629200745:web:94f80c49b2f9299188fff8",
    measurementId: "G-2XZBS9HKVJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default db;