import firebaseInstance from "../firebase";
import firebase from "firebase";
require("firebase/firestore");

const db = firebase.firestore();

export const addTransaction = async (
  transactionAmount,
  transactionName,
  tags
) => {
  try {
    const docRef = await db.collection("transactions").add({
      transactionName,
      transactionAmount,
      tags,
    });

    return docRef;
  } catch (e) {
    return e;
  }
};

export const getAllTransactions = () => {
  db.collection("transactions")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log("doc: ", doc.data());
      });
    });
};
