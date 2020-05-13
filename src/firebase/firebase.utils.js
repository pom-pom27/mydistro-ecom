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
  appId: process.env.REACT_APP_FIREBASE_API_KEY,
  measurementId: "G-G2VY0XFRND",
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  //if user not signin stop this operation
  if (!userAuth) return;

  const docRef = firestore.doc(`users/${userAuth.uid}`);

  //get the data
  const snapShot = await docRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await docRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return docRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
