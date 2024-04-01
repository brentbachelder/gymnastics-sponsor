import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA_3qZRrzdxXu9xHMT1JXY_6LHp8cs8HNQ",
	authDomain: "beam-starter.firebaseapp.com",
	projectId: "beam-starter",
	storageBucket: "beam-starter.appspot.com",
	messagingSenderId: "775989924522",
	appId: "1:775989924522:web:185cba901d5d553435b6d3",
	measurementId: "G-KZBXZ0XPK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)