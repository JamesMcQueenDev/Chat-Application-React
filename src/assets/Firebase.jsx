import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDiNaQhvUjzcE6WrMZVIAbWxwgr-_OdFUU",

  authDomain: "messenger-b30be.firebaseapp.com",

  projectId: "messenger-b30be",

  storageBucket: "messenger-b30be.appspot.com",

  messagingSenderId: "616757283201",

  appId: "1:616757283201:web:ae4e3376fff85c1e9d4080",
});

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider, facebookProvider };

export default firestore;
