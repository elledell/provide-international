"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { initiateStkPush } from "@/actions/mpesa";

export default function DonateButton() {
  const createPendingDonation = useMutation(api.donations.createPendingDonation);
  const [amount, setAmount] = useState(10);
  const [donorName, setDonorName] = useState("Generous Donor");
  const [email, setEmail] = useState("donor@example.com");
  const [phone, setPhone] = useState("254708374149"); // Safaricom's documented sandbox test number
  const [loading, setLoading] = useState(false);
  const [checkoutRequestId, setCheckoutRequestId] = useState<string | null>(null);

  // Reactively watches the donation record — updates instantly when the callback route
  // patches its status in Convex, no polling needed.
  const donation = useQuery(
    api.donations.getDonationStatus,
    checkoutRequestId ? { checkoutRequestId } : "skip"
  );

  const handleDonate = async () => {
    setLoading(true);
    setCheckoutRequestId(null);
    try {
      const result = await initiateStkPush(amount, phone, "Provide-International");

      if (!result) {
        alert("Could not initiate STK push — check the server logs.");
        return;
      }

      await createPendingDonation({
        donorName,
        email,
        phone,
        amount,
        currency: "KES",
        checkoutRequestId: result.checkoutRequestId,
        merchantRequestId: result.merchantRequestId,
      });

      setCheckoutRequestId(result.checkoutRequestId);
    } catch (error) {
      console.error("Donation failed", error);
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
        className="w-full p-3 border border-brandBlue-300 rounded text-slate-900"
        placeholder="Amount in KES"
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-3 border border-brandBlue-300 rounded text-slate-900"
        placeholder="2547XXXXXXXX"
      />

      <button
        onClick={handleDonate}
        disabled={loading}
        className="w-full bg-brandGold-500 hover:bg-yellow-500 text-slate-900 font-bold py-3 px-8 rounded shadow-md transition-colors disabled:opacity-50"
      >
        {loading ? "SENDING PROMPT..." : "DONATE NOW"}
      </button>

      {checkoutRequestId && (
        <div className="w-full text-sm p-3 rounded bg-white border border-brandBlue-200">
          {!donation || donation.status === "pending" ? (
            <p className="text-brandBlue-700">Check your phone and enter your M-Pesa PIN…</p>
          ) : donation.status === "success" ? (
            <p className="text-green-700 font-semibold">
              Payment confirmed! Receipt: {donation.mpesaReceiptNumber}
            </p>
          ) : (
            <p className="text-red-600 font-semibold">Payment failed or was cancelled.</p>
          )}
        </div>
      )}
    </div>
  );
}