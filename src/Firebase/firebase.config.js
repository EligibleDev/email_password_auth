import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzluvhuZB0nUP5SKyIXenUJXm-OUEj_ns",
    authDomain: "email-password-auth-24dad.firebaseapp.com",
    projectId: "email-password-auth-24dad",
    storageBucket: "email-password-auth-24dad.appspot.com",
    messagingSenderId: "886333851585",
    appId: "1:886333851585:web:dabf8a1adc34c58ce4d140",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;