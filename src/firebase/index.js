import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyCLEtyrARh19bj0VgS3m50pxthmuvDQamU",
    authDomain: "restaurants-b143c.firebaseapp.com",
    databaseURL: "https://restaurants-b143c.firebaseio.com",
    projectId: "restaurants-b143c",
    storageBucket: "restaurants-b143c.appspot.com",
    messagingSenderId: "346645719905",
    appId: "1:346645719905:web:b9f0d4889adfe6e14f7320",
    measurementId: "G-999NMLVQ9D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
