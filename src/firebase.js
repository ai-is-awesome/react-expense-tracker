import firebase from "firebase";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

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

const firebaseInstance = getFirebase();

export default firebaseInstance;
