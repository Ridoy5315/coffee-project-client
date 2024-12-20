// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-_oPO-fBFNBxJyk9RLcNXN1OMox_5PQY",
  authDomain: "coffee-project-1464a.firebaseapp.com",
  projectId: "coffee-project-1464a",
  storageBucket: "coffee-project-1464a.firebasestorage.app",
  messagingSenderId: "1035856593699",
  appId: "1:1035856593699:web:2a61363d3f775f49d94296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);