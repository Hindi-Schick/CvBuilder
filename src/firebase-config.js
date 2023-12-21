// Your web app's Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDB8N8KZVj5U8MhIIh8g3vt2oCC-7gN4nM",
  authDomain: "cv-builder-c2241.firebaseapp.com",
  projectId: "cv-builder-c2241",
  storageBucket: "cv-builder-c2241.appspot.com",
  messagingSenderId: "99033186900",
  appId: "1:99033186900:web:851ea958379e4dc3f7e3c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth service
const auth = getAuth(app);
// Initialize Firebase Firestore service
const db = getFirestore(app);

// Initialize Emulators for development purposes, run with: firebase emulators:start
connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(db, 'localhost', 8080);

export { app, auth, db };
