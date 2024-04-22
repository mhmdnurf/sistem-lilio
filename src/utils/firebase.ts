// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhKZC3s2fu9SzxhzD6BOFVfyylByn3I-g",
  authDomain: "sistem-lilio.firebaseapp.com",
  projectId: "sistem-lilio",
  storageBucket: "sistem-lilio.appspot.com",
  messagingSenderId: "544827680235",
  appId: "1:544827680235:web:0c4e29c4048f3ab85b25ae",
  measurementId: "G-Z4RHRE4DY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
