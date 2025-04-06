// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // Firebase initialization
import { getAuth } from "firebase/auth"; // Firebase authentication function     
import { getFirestore } from "firebase/firestore"; // ✅ Firestore added
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCju2klDAmeY06gRGubdAsEXMyFGREM0Lg",
  authDomain: "verde-user-login-db.firebaseapp.com",
  projectId: "verde-user-login-db",
  storageBucket: "verde-user-login-db.firebasestorage.app",
  messagingSenderId: "152409376214",
  appId: "1:152409376214:web:c4efdd172810300c221077",
  measurementId: "G-0SHPCF7ME7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// export authentication for checking of credentials
// export db for storing Company Name and Username
export { authentication, db }; 