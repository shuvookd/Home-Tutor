// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdAl1ZW7gVku_1xyHqpEx9ei7p_ny4iCo",
  authDomain: "home-tutor-shuvokd.firebaseapp.com",
  projectId: "home-tutor-shuvokd",
  storageBucket: "home-tutor-shuvokd.appspot.com",
  messagingSenderId: "539023411797",
  appId: "1:539023411797:web:750084a8ee13a1c47f62dc",
  measurementId: "G-6J45YKKLQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
