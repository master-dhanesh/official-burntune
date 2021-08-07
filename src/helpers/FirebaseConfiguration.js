import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

// var firebaseConfig = {
//     apiKey: "AIzaSyBfvg3BnvII9qU6lUJ8ybd1WOmzRyFOuSo",
//     authDomain: "prototype-burntune.firebaseapp.com",
//     projectId: "prototype-burntune",
//     storageBucket: "prototype-burntune.appspot.com",
//     messagingSenderId: "738219949143",
//     appId: "1:738219949143:web:d233facc49e554ec233712",
//     measurementId: "G-76CPBMBL19"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyCOjCEnalvvRT4jM5neXx5flY0VoyQPaaM",
  authDomain: "burntune-server.firebaseapp.com",
  projectId: "burntune-server",
  storageBucket: "burntune-server.appspot.com",
  messagingSenderId: "1057576363540",
  appId: "1:1057576363540:web:7627b6fd5c3b16faade901",
  measurementId: "G-406M4CZ839"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const storage = firebase.storage();
  const database = firebase.database();

  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, firestore, storage, database, firebase, provider};