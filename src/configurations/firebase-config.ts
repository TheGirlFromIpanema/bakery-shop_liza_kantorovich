// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGmcQZrcghZ3X62qvI3Y_j4FQ0rpmLoes",
    authDomain: "bakery-shop-71b68.firebaseapp.com",
    projectId: "bakery-shop-71b68",
    storageBucket: "bakery-shop-71b68.firebasestorage.app",
    messagingSenderId: "1053289907360",
    appId: "1:1053289907360:web:6678053106a4ee9f5db5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);