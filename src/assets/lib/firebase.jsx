// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPdhzBWTV3WORV8Lqk4ARzH9xomUGxPfo",
  authDomain: "summarizer-tool-20819.firebaseapp.com",
  projectId: "summarizer-tool-20819",
  storageBucket: "summarizer-tool-20819.firebasestorage.app",
  messagingSenderId: "187753239894",
  appId: "1:187753239894:web:0b0d1750f0d1d75a05b2f7",
  measurementId: "G-PZJ6E45W0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);