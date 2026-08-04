import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAUlsA4YRO0vGJB5fR6tGD-8nm2B8ySos8",
  authDomain: "disney-4964f.firebaseapp.com",
  projectId: "disney-4964f",
  storageBucket: "disney-4964f.firebasestorage.app",
  messagingSenderId: "384705956173",
  appId: "1:384705956173:web:ccf8f16b0f508f32728f04",
  measurementId: "G-JVDC8QTVH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
