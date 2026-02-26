// src/lib/firebase.ts

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl-s15zjdlbKp6Vxuk7cIrNk3hzPBpRuI",
  authDomain: "msme-37b8c.firebaseapp.com",
  projectId: "msme-37b8c",
  storageBucket: "msme-37b8c.firebasestorage.app",
  messagingSenderId: "853277612931",
  appId: "1:853277612931:web:46361b525e0d680e01b4b6",
  measurementId: "G-LDFS0L88VH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;