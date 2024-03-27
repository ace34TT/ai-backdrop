/* eslint-disable linebreak-style */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwi1-7FCiVkDcAE2sMWw6GH6vr6Ldhb1Y",
  authDomain: "file-server-f5b74.firebaseapp.com",
  projectId: "file-server-f5b74",
  storageBucket: "file-server-f5b74.appspot.com",
  messagingSenderId: "570131214361",
  appId: "1:570131214361:web:681c5554f1fb9232e5fa88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
//

const provider = new GoogleAuthProvider();

export { auth, firestore, storage, provider };
