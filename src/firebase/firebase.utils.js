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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  };
  const userRef = firestore.doc(`users/${userAuth.uid}`);;
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating User', error.message);
    };
  }

  return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
