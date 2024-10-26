// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-b3a1e.firebaseapp.com',
  projectId: 'mern-blog-b3a1e',
  storageBucket: 'mern-blog-b3a1e.appspot.com',
  messagingSenderId: '780351696828',
  appId: '1:780351696828:web:0eca53f6c80050cbe745b9',
  measurementId: 'G-LV81GE5J4J',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
