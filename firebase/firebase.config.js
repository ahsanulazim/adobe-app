// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "adobe-app-6c64c.firebaseapp.com",
  projectId: "adobe-app-6c64c",
  storageBucket: "adobe-app-6c64c.firebasestorage.app",
  messagingSenderId: "846446649103",
  appId: "1:846446649103:web:ee52694af52add38a3a87a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
