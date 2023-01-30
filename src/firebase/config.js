import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcskhjC8oiXj1QtCeygMoBaLyrL2Mhaqo",
  authDomain: "firegram-38b14.firebaseapp.com",
  projectId: "firegram-38b14",
  storageBucket: "firegram-38b14.appspot.com",
  messagingSenderId: "232099982842",
  appId: "1:232099982842:web:bca6b8bd2d2903685fc843"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };