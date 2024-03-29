import {View} from 'react-native'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD-ufTfHpzxT3cXVplWvhbddhRu7RJo1uA",
  authDomain: "newprject-d667b.firebaseapp.com",
  projectId: "newprject-d667b",
  storageBucket: "newprject-d667b.appspot.com",
  messagingSenderId: "372184646386",
  appId: "1:372184646386:web:d495d5f5ba6c2ce83c866b",
  measurementId: "G-M1H1XFTTFF"
};

  
    const app = initializeApp(firebaseConfig);

export default app;