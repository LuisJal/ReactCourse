// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6aS1sSajovVUScGDtJxypE-zTaa5gAk",
  authDomain: "react-course-journal-3ef8c.firebaseapp.com",
  projectId: "react-course-journal-3ef8c",
  storageBucket: "react-course-journal-3ef8c.appspot.com",
  messagingSenderId: "24404922234",
  appId: "1:24404922234:web:3cf6d6c66c8fedb20a10c3",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB= getFirestore(firebaseApp);