// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC907J4WKfPrroG06qgJPB2YcrsBUV3YW0",
  authDomain: "react-firebase-59f8d.firebaseapp.com",
  projectId: "react-firebase-59f8d",
  storageBucket: "react-firebase-59f8d.appspot.com",
  messagingSenderId: "241663617457",
  appId: "1:241663617457:web:ad446f245dde915fd83590",
  measurementId: "G-QW5FFFC347",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
