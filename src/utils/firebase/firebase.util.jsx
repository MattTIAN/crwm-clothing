// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcUZ1c7OdGz3yeq_oqhvApePSTRFU6J6A",
  authDomain: "crwn-clothing-db-388c9.firebaseapp.com",
  projectId: "crwn-clothing-db-388c9",
  storageBucket: "crwn-clothing-db-388c9.appspot.com",
  messagingSenderId: "696296847811",
  appId: "1:696296847811:web:83d4cc5d59183c839b2576",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //   console.log(userDocRef);
  const userSnpashot = await getDoc(userDocRef);
    console.log(userSnpashot);
    console.log(userSnpashot.exists());
//   if (!userSnpashot.exists()) {
//     const {displayName, email} = userAuth;
//     const createdAt = new Date();
//     try{
//         await setDoc(userDocRef, {
//             displayName, email, createdAt
//         });
//         console.log("setDoc成功")
//     } catch(error){
//         console.log('error creating the user', error.message);
//     }

//   }
};
