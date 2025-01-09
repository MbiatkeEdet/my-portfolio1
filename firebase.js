// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA6bue9OpPtE_wE0XRHoKB1fFOMuxp3IgM",
  authDomain: "my-portfolio-75a2a.firebaseapp.com",
  projectId: "my-portfolio-75a2a",
  storageBucket: "my-portfolio-75a2a.firebasestorage.app",
  messagingSenderId: "425033377265",
  appId: "1:425033377265:web:be95fe69ced645aa031050",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
