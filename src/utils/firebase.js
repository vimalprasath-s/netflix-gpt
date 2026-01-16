// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWDuoHb01wQr-2SKNNqYvuiRRjAGRxivo",
  authDomain: "netflixgpt-83000.firebaseapp.com",
  projectId: "netflixgpt-83000",
  storageBucket: "netflixgpt-83000.firebasestorage.app",
  messagingSenderId: "591537843283",
  appId: "1:591537843283:web:67da6e8a2543381c432aa6",
  measurementId: "G-1F3H2Y6264",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
