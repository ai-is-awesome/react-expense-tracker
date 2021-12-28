import firebaseInstance from "../firebase";
import firebase from "firebase";
import { validateObject } from "../utils";
require("firebase/firestore");

const db = firebase.firestore();

export const getAllTransactions = async () => {
  return db.collection("transactions").get();
};

export const addTransaction = async (
  transactionAmount,
  transactionName,
  tags
) => {
  try {
    const obj = { transactionAmount, transactionName, tags };
    const validatedObject = validateObject(obj);

    const docRef = await db.collection("transactions").add(validatedObject);

    return docRef;
  } catch (e) {
    console.log("firebase saving error!");
    throw e;
  }
};
