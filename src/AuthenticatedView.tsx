import React from "react";
import { getFirestore, collection, DocumentData } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "./firebaseApp";

interface IReceiptRow extends DocumentData {
  description: string;
  amount: number;
  purchase_date: Date;
}

export default function AuthenticatedView() {
  const [values, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "receipt_rows"),
    {}
  );

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <pre>Error: {error.message}</pre>
  ) : (
    <pre>{JSON.stringify(values?.docs, null, 2)}</pre>
  );
}
