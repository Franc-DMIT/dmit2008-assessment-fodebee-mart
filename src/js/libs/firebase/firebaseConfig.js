// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDheFW8oELu17C76br4ZmMhBbca_04TyDA",
  authDomain: "fodebee.firebaseapp.com",
  databaseURL: "https://fodebee-default-rtdb.firebaseio.com",
  projectId: "fodebee",
  storageBucket: "fodebee.appspot.com",
  messagingSenderId: "743216715652",
  appId: "1:743216715652:web:edcd48c5f9b6947ff5efd1"
};
 
// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

// export the service objects
export {auth, db, storage}


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDheFW8oELu17C76br4ZmMhBbca_04TyDA",
//   authDomain: "fodebee.firebaseapp.com",
//   databaseURL: "https://fodebee-default-rtdb.firebaseio.com",
//   projectId: "fodebee",
//   storageBucket: "fodebee.appspot.com",
//   messagingSenderId: "743216715652",
//   appId: "1:743216715652:web:edcd48c5f9b6947ff5efd1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);