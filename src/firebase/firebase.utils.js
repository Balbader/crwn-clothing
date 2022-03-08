import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyAaZVT-XY3bheRp8L_2vdW65H7zwmRoyTY",
  authDomain: "crwn-db-4bf9d.firebaseapp.com",
  projectId: "crwn-db-4bf9d",
  storageBucket: "crwn-db-4bf9d.appspot.com",
  messagingSenderId: "320181890834",
  appId: "1:320181890834:web:364582cce74a25e7ea4dcb",
  measurementId: "G-Y2KWJ9MRBJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
