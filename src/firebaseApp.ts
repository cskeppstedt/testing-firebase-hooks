// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3GpM8raLhcgMa35BQyDYBS8bwKElUbWk",
  authDomain: "testing-firebase-hooks.firebaseapp.com",
  projectId: "testing-firebase-hooks",
  storageBucket: "testing-firebase-hooks.appspot.com",
  messagingSenderId: "1018164107982",
  appId: "1:1018164107982:web:f66c713333fcf588464e9f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
