import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyChEND1qmwugjPyYLUn_KcIP-hV8FOxwrE",
  authDomain: "mydistro-db.firebaseapp.com",
  databaseURL: "https://mydistro-db.firebaseio.com",
  projectId: "mydistro-db",
  storageBucket: "mydistro-db.appspot.com",
  messagingSenderId: "1054629792958",
  appId: "1:1054629792958:web:84b314f817f450bcc122ef",
  measurementId: "G-G2VY0XFRND",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
