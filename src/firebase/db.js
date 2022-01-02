import firebaseInstance from "../firebase";
import firebase from "firebase";
import { validateObject } from "../utils";
require("firebase/firestore");

let db;
if (!db) {
  db = firebase.firestore();
} else {
}

export const getAllTransactions = async () => {
  return db.collection("transactions").get();
};

export const addTransaction = async (obj) => {
  try {
    // check if obj has relevant keys here
    const validatedObject = validateObject(obj);

    const docRef = await db.collection("transactions").add(validatedObject);

    return docRef;
  } catch (e) {
    console.log("firebase saving error!");
    throw e;
  }
};
