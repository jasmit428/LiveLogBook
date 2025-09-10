// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app"; // initialize firebase app
// import { getAuth } from "firebase/auth"; // get firebase auth
// import { getFirestore } from "firebase/firestore" // get firestore db

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey : process.env.NEXT_PUBLIC_FIREBASE_API_KEY, 
//   authDomain : process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN , 
//   projectId : process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID , 
//   storageBucket : process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, 
//   messagingSenderId : process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, 
//   appId : process.env.NEXT_PUBLIC_FIREBASE_APP_ID 
//   }

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db = getFirestore(app)



// app/_utils/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";       


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyOI6E5cJkHvH-t9ZCzwJRCw9fIiIG_qI",
  authDomain: "livelogbook.firebaseapp.com",
  projectId: "livelogbook",
  storageBucket: "livelogbook.firebasestorage.app",
  messagingSenderId: "191562015748",
  appId: "1:191562015748:web:1d60e1fd4d962a2e708151",
  measurementId: "G-S220TDN694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Export Firebase services
export const auth = getAuth(app);       // for admin login

