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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;