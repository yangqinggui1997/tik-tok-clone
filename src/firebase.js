// import firebase from 'firebase';
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDe8DWGkMK9W_L7D8dGM1GoI1uzKBtIXZE",
    authDomain: "tiktok-clone-64c4d.firebaseapp.com",
    projectId: "tiktok-clone-64c4d",
    storageBucket: "tiktok-clone-64c4d.appspot.com",
    messagingSenderId: "627528411208",
    appId: "1:627528411208:web:5fdd8301d63ba76435107d",
    measurementId: "G-HPMB0VR6ZF"
  };
const firebaseApp =
  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;