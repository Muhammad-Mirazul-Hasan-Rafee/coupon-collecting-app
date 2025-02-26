// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7QGqGMoO0avKdydVRgpbjLKRAmBgYV0",
  authDomain: "coupon-collecting-app.firebaseapp.com",
  projectId: "coupon-collecting-app",
  storageBucket: "coupon-collecting-app.firebasestorage.app",
  messagingSenderId: "819068643665",
  appId: "1:819068643665:web:1926c9bb6ad02ba42e0b70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 export default auth;
