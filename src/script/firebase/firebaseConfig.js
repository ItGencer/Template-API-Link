import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSruh3Jb7zmm9GA-2WFfSbQSOvmse3ijc",
  authDomain: "template-api-link.firebaseapp.com",
  projectId: "template-api-link",
  storageBucket: "template-api-link.firebasestorage.app",
  messagingSenderId: "31506237830",
  appId: "1:31506237830:web:577d0f5db0dd624d4bc407",
  measurementId: "G-94G4EG983B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const db = getFirestore(app);
