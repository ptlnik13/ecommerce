import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCfm_bKm_GFd72GEOt27SHNAkT0fTc0STA",
    authDomain: "crown-db-ab49d.firebaseapp.com",
    projectId: "crown-db-ab49d",
    storageBucket: "crown-db-ab49d.appspot.com",
    messagingSenderId: "582515620117",
    appId: "1:582515620117:web:d6cf0c83644a4f935c511c",
    measurementId: "G-MX7PC4M1RM"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;