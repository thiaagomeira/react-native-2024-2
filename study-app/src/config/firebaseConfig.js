import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
} from '@env';

const firebaseConfig = {
    apiKey: "AIzaSyDah43X9mJfgKIh3GFPsolRTPeGo4-1v-0",
    authDomain: "study-app-88de7.firebaseapp.com",
    projectId: "study-app-88de7",
    storageBucket: "study-app-88de7.firebasestorage.app",
    messagingSenderId: "771225080839",
    appId: "1:771225080839:web:a9e9faa2d33e10b41646a2"
  };


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)