// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDTW7s9H9z9qNtHQmKBUEkGdVqmDmznHI",
    authDomain: "netflexgpt.firebaseapp.com",
    projectId: "netflexgpt",
    storageBucket: "netflexgpt.appspot.com",
    messagingSenderId: "481365766075",
    appId: "1:481365766075:web:6c3baddff44cf06622de9e",
    measurementId: "G-B5YPE6SCD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();