import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxypZW2RX4oimFV4ygKbQa1Ub4JzWdwS0",
  authDomain: "delraylocals.firebaseapp.com",
  projectId: "delraylocals",
  storageBucket: "delraylocals.appspot.com",
  messagingSenderId: "318251198716",
  appId: "1:318251198716:web:f6ea758774a86d8aed4f79",
  measurementId: "G-X5DDCKBGZ9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);