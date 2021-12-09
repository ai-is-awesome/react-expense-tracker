import { createContext, useState } from "react";
import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../firebase";

const AuthContext = createContext({
  user: null,
  login: () => {},
  signUp: () => {},
  logOut: () => {},
  authReady: false,
});

let instance;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  function getFirebase() {
    if (typeof window !== "undefined") {
      if (instance) return instance;
      instance = firebase.initializeApp(firebaseConfig);
      return instance;
    }

    return null;
  }

  const firebaseInstance = getFirebase();

  function signOut() {
    firebaseInstance.auth().signOut();
  }

  function signUp(email, password) {
    console.log("email: ", email);
    return firebaseInstance
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => setUser(user));
  }

  firebaseInstance.auth().onAuthStateChanged((user) => {
    setUser(user);
    setAuthReady(true);
  });

  const context = { user, authReady, signOut, signUp };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
