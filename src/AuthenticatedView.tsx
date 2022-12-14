import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import firebaseApp from "./firebaseApp";
import ReceiptRowsTable from "./ReceiptRowsTable";

export default function AuthenticatedView() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formattedDescription = description.trim();
    const formattedAmount = parseFloat(amount);
    const formattedPurchaseDate = new Date(purchaseDate);

    await addDoc(collection(getFirestore(firebaseApp), "receipt_rows"), {
      description: formattedDescription,
      amount: formattedAmount,
      purchaseDate: formattedPurchaseDate,
    });

    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="description">Description</label>
            <input
              name="description"
              required
              value={description}
              onChange={(evt) => setDescription(evt.target.value)}
            />
          </div>

          <div>
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              required
              value={amount}
              onChange={(evt) => setAmount(evt.target.value)}
            />
          </div>

          <div>
            <label htmlFor="purchaseDate">Purchase date</label>
            <input
              name="purchaseDate"
              required
              type="date"
              value={purchaseDate}
              onChange={(evt) => setPurchaseDate(evt.target.value)}
            />
          </div>

          <input type="submit" value="Add" />
        </form>
      </div>
      <ReceiptRowsTable />
    </div>
  );
}
