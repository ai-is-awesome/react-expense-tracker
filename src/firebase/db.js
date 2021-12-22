import firebaseConfig from "../firebase";
import firebase from "firebase";

let instance;

const getFirebase = () => {
  if (typeof window === undefined) {
    return null;
  }
  if (instance) {
    return instance;
  } else {
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
};
