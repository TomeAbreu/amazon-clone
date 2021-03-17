//Config Firebase project

import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyBvqdCLjv-Qv7xVrxJqE-EsJPLoSdZCQWU",
   authDomain: "clone-fa0a1.firebaseapp.com",
   projectId: "clone-fa0a1",
   storageBucket: "clone-fa0a1.appspot.com",
   messagingSenderId: "625777925271",
   appId: "1:625777925271:web:6a5f5905fd4828589e9dd2",
   measurementId: "G-FLSZMNYFJR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
