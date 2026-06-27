// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO2DOhqzP6ewax53_Z-qWSy99t7OHd7fA",
  authDomain: "portfolio-e1963.firebaseapp.com",
  projectId: "portfolio-e1963",
  storageBucket: "portfolio-e1963.firebasestorage.app",
  messagingSenderId: "346947512275",
  appId: "1:346947512275:web:551a04e26d7ac066a47126",
  measurementId: "G-EM7S52FF1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);