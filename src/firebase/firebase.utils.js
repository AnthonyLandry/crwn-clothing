import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMQpXdz9TsgC7vfNSThffugvpte_db_Sc",
    authDomain: "crown-db-f6351.firebaseapp.com",
    databaseURL: "https://crown-db-f6351.firebaseio.com",
    projectId: "crown-db-f6351",
    storageBucket: "crown-db-f6351.appspot.com",
    messagingSenderId: "77898718579",
    appId: "1:77898718579:web:0e161b55bb30f43e907906",
    measurementId: "G-2HY2MXK7GF"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;