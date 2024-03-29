
import { StyleSheet, Text, View } from 'react-native';
//import CustomCmponent from './components/hello'

import StackNavigation from './navigation/StackNaigation';
import app from './firebase/Index';
// import Firebaseapp from './firebase/Index';
// const firebaseConfig = {
//   apiKey: "AIzaSyD-ufTfHpzxT3cXVplWvhbddhRu7RJo1uA",
//   authDomain: "newprject-d667b.firebaseapp.com",
//   projectId: "newprject-d667b",
//   storageBucket: "newprject-d667b.appspot.com",
//   messagingSenderId: "372184646386",
//   appId: "1:372184646386:web:d495d5f5ba6c2ce83c866b",
//   measurementId: "G-M1H1XFTTFF"
// };


export default function App() {
  
  return (
    
    <StackNavigation/>
  
  );
}


