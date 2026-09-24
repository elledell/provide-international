"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { initiatePesapalPayment } from "../actions/pesapal";

export default function DonateButton() {
  const saveDonation = useMutation(api.donations.saveDonation);
  const [amount, setAmount] = useState(1000); 
  const [donorName, setDonorName] = useState("Generous Donor");
  const [email, setEmail] = useState("donor@example.com");
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    try {
      // 1. Save the initial "Pending" record to Convex
      await saveDonation({
        donorName,
        email,
        amount,
        currency: "KES",
        flutterwaveTransactionId: `PENDING-${Date.now()}`, // You can rename this field in schema later
        status: "pending",
      });

      // 2. Call the Next.js Server Action to get the Pesapal link
      const redirectUrl = await initiatePesapalPayment(amount, email, donorName);
      
      // 3. Redirect the user to Pesapal to complete the payment
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    } catch (error) {
      console.error("Payment initiation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start gap-4 p-6 bg-brandBlue-50 rounded-lg w-full max-w-md">
      <h3 className="text-xl font-bold text-brandBlue-700">Support Our Cause</h3>
      
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full p-3 border border-brandBlue-300 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-brandBlue-500"
        placeholder="Amount in KES"
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        className="w-full bg-brandGold-500 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded shadow-md transition-colors disabled:opacity-50"
      >
        {loading ? "PROCESSING..." : "DONATE NOW"}
      </button>
    </div>
  );
}