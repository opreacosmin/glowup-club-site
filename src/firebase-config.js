// Import the functions you need from the SDKs you need
import {getAnalytics} from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdciJoK2z6dbuMOMJvdQWWZ74Ui6kRgds",
    authDomain: "blog-fe381.firebaseapp.com",
    projectId: "blog-fe381",
    storageBucket: "blog-fe381.appspot.com",
    messagingSenderId: "76277863880",
    appId: "1:76277863880:web:5162da26007cc937605cfd",
    measurementId: "G-CKG9P0PLTS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const db = app.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 3000);
export {auth,provider};
export default db;