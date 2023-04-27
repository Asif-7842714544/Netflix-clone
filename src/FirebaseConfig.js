// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFJMG6hDX1jo7ir3_UBwLXKSw1Ryxp6_A",
  authDomain: "netflix-clone-4a88d.firebaseapp.com",
  projectId: "netflix-clone-4a88d",
  storageBucket: "netflix-clone-4a88d.appspot.com",
  messagingSenderId: "599379213734",
  appId: "1:599379213734:web:3058b6705d7d9e33756367"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)
