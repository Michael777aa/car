import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyCysdAyvDgcMfLU-5Rvp0H6uxzBDKE22FY",
  authDomain: "elearning-21be4.firebaseapp.com",
  databaseURL: "https://elearning-21be4-default-rtdb.firebaseio.com", // Correct URL
  projectId: "elearning-21be4",
  storageBucket: "elearning-21be4.appspot.com", // Corrected here
  messagingSenderId: "659778692237",
  appId: "1:659778692237:web:3db9384d897ea044846ec4",
  measurementId: "G-CFRH6FM7TW",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
