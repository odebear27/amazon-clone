import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiW8rYBZiG7CAeqVNUqX3doPU7Knycjas",
    authDomain: "clone-724c1.firebaseapp.com",
    projectId: "clone-724c1",
    storageBucket: "clone-724c1.appspot.com",
    messagingSenderId: "752066615273",
    appId: "1:752066615273:web:e8c4c5376a7e0bafa21d78",
    measurementId: "G-9FRWEG9E6E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };