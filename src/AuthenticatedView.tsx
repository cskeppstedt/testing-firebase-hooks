import React from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebaseApp from "./firebaseApp";

export default function AuthenticatedView() {
  const [values, loading, error] = useCollectionData(
    collection(getFirestore(firebaseApp), "receipt_rows"),
    {}
  );

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <pre>Error: {error.message}</pre>
  ) : (
    <pre>{JSON.stringify(values, null, 2)}</pre>
  );
}
