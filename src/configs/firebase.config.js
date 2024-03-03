
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLMlPgWHKbKR3zF8ImilwRZ9m3u6AwMGE",
  authDomain: "dummy-d6041.firebaseapp.com",
  projectId: "dummy-d6041",
  storageBucket: "dummy-d6041.appspot.com",
  messagingSenderId: "719175906410",
  appId: "1:719175906410:web:db8afb1e18c72594bbc613"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);