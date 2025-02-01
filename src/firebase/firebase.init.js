// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwxahB_Y7c70sQALlHMLGgUlyS2FRkv8A",
    authDomain: "coffee-store-8ec04.firebaseapp.com",
    projectId: "coffee-store-8ec04",
    storageBucket: "coffee-store-8ec04.firebasestorage.app",
    messagingSenderId: "385194396384",
    appId: "1:385194396384:web:e9a6f26df5308f3d5c9e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;