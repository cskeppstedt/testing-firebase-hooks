import React from "react";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebaseApp from "./firebaseApp";

export default function ReceiptRowsTable() {
  const [values, loading, error] = useCollectionData(
    query(
      collection(getFirestore(firebaseApp), "receipt_rows"),
      orderBy("purchased", "desc")
    )
  );

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <pre>Error: {error.message}</pre>
  ) : (
    <pre>{JSON.stringify(values, null, 2)}</pre>
  );
}
