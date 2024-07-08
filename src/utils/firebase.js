import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI_Myiaf3WRTKdOr8oP7kF81BSrC1pSH8",
  authDomain: "netflix-gpt-efaa7.firebaseapp.com",
  projectId: "netflix-gpt-efaa7",
  storageBucket: "netflix-gpt-efaa7.appspot.com",
  messagingSenderId: "511471392338",
  appId: "1:511471392338:web:1af1d30e95b88ebd93318b",
  measurementId: "G-PR1GDBF8EW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
