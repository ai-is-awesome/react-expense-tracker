import firebaseInstance from "../firebase";
import firebase from "firebase";
import { validateObject } from "../utils";
require("firebase/firestore");

let db;
if (!db) {
  db = firebase.firestore();
} else {
}

export const getAllTransactions = async (uid) => {
  return db.collection("transactions").where("firebaseUID", "==", uid).get();
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

export const addUser = async (firebaseUID, email) => {
  const obj = { firebaseUID, email };
  const validatedObject = validateObject(obj);
  console.log("obj: ", obj, "validated:", validatedObject);
  const docRef = await db.collection("users").add(validatedObject);
  return docRef;
};
