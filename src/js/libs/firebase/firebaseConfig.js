// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDheFW8oELu17C76br4ZmMhBbca_04TyDA",
  authDomain: process.env.STOREFRONT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.STOREFRONT_FIREBASE_DATABASE_URL,
  projectId: "fodebee", 
  storageBucket:process.env.STOREFRONT_FIREBASE_STORAGE_BUCKET,  
  messagingSenderId: process.env.STOREFRONT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.STOREFRONT_FIREBASE_APP_ID
};
 
// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// export the service objects
export {storage, db, auth}
