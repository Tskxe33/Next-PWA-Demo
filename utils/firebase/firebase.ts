// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChwFUsXAFcHonV-RRyKtNNM6cykJJKJfs",
  authDomain: "nextjs-pwa-demo.firebaseapp.com",
  projectId: "nextjs-pwa-demo",
  storageBucket: "nextjs-pwa-demo.appspot.com",
  messagingSenderId: "639198511939",
  appId: "1:639198511939:web:262ae4261793f66d0025f6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
