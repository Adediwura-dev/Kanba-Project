// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBhweEkRg61K0zpMO9LigB1UcXXRZ352BE",
	authDomain: "padipal-e8449.firebaseapp.com",
	projectId: "padipal-e8449",
	storageBucket: "padipal-e8449.firebasestorage.app",
	messagingSenderId: "850727070737",
	appId: "1:850727070737:web:e71c9ffd38a3128f6f55b0",
	measurementId: "G-54LPMPVDBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app;
