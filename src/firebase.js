// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGwZa8Kr6y2kkxuguqbfQ8CajX87rmjaI",
  authDomain: "metflixy.firebaseapp.com",
  projectId: "metflixy",
  storageBucket: "metflixy.appspot.com",
  messagingSenderId: "475055663034",
  appId: "1:475055663034:web:da7babaf110caf6b0bdf83",
  measurementId: "G-C3V62SGBR4",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
