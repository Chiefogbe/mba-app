// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mba-app-e9f9e.firebaseapp.com",
  projectId: "mba-app-e9f9e",
  storageBucket: "mba-app-e9f9e.appspot.com",
  messagingSenderId: "1035290676809",
  appId: "1:1035290676809:web:81c50bb4617dcfb6c87998"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);