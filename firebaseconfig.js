// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDroA-DvbgVa_qTwzjetI10eDwSlJQ7mhw",
  authDomain: "exhibition-3688c.firebaseapp.com",
  projectId: "exhibition-3688c",
  storageBucket: "exhibition-3688c.firebasestorage.app",
  messagingSenderId: "331251889266",
  appId: "1:331251889266:web:70529530aa349a1466beeb",
  measurementId: "G-PBRVW44R39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
