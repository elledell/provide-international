"use server";

// Sandbox constants used as fallback. In production, set MPESA_SHORTCODE and
// MPESA_PASSKEY in .env.local — these are real secrets tied to your paybill,
// never hardcode or share them.
const SHORTCODE = process.env.MPESA_SHORTCODE || "174379";
const PASSKEY =
  process.env.MPESA_PASSKEY ||
  "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
const BASE_URL = process.env.MPESA_BASE_URL || "https://sandbox.safaricom.co.ke";

function getTimestamp() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    now.getFullYear().toString() +
    pad(now.getMonth() + 1) +
    pad(now.getDate()) +
    pad(now.getHours()) +
    pad(now.getMinutes()) +
    pad(now.getSeconds())
  );
}

async function getAccessToken() {
  const consumerKey = process.env.MPESA_CONSUMER_KEY?.trim();
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET?.trim();

  console.log("Using MPESA_BASE_URL:", BASE_URL);

  if (!consumerKey || !consumerSecret) {
    throw new Error("Missing MPESA_CONSUMER_KEY or MPESA_CONSUMER_SECRET in .env.local");
  }

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

  const res = await fetch(
    `${BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
    {
      method: "GET",
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  const rawText = await res.text();
  console.log("Daraja Auth Response:", res.status, rawText || "(empty body)");

  if (!rawText) {
    throw new Error(`Daraja auth returned an empty body (status ${res.status}).`);
  }

  const data = JSON.parse(rawText);

  if (!data.access_token) {
    throw new Error("Failed to get Daraja access token: " + JSON.stringify(data));
  }

  return data.access_token as string;
}

/**
 * Initiates an STK push to the given phone number.
 * phone must be in the format 2547XXXXXXXX (no + or leading 0).
 * In sandbox, Safaricom's documented test number is 254708374149.
 */
export async function initiateStkPush(amount: number, phone: string, accountRef: string) {
  try {
    const token = await getAccessToken();
    const timestamp = getTimestamp();
    const password = Buffer.from(
      `${SHORTCODE}${PASSKEY}${timestamp}`
    ).toString("base64");

    const callbackUrl = process.env.MPESA_CALLBACK_URL; // e.g. your ngrok URL + /api/mpesa/callback
    if (!callbackUrl) {
      throw new Error("Missing MPESA_CALLBACK_URL in .env.local (needs a public URL, e.g. via ngrok)");
    }

    const res = await fetch(
      `${BASE_URL}/mpesa/stkpush/v1/processrequest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          BusinessShortCode: SHORTCODE,
          Password: password,
          Timestamp: timestamp,
          TransactionType: "CustomerPayBillOnline",
          Amount: Math.round(amount),
          PartyA: phone,
          PartyB: SHORTCODE,
          PhoneNumber: phone,
          CallBackURL: callbackUrl,
          AccountReference: accountRef,
          TransactionDesc: "Donation to Provide International",
        }),
      }
    );

    const rawText = await res.text();
    console.log("Daraja STK Push Response:", res.status, rawText || "(empty body)");

    if (!rawText) {
      console.error(`STK push returned an empty body (status ${res.status}).`);
      return null;
    }

    const data = JSON.parse(rawText);

    if (data.ResponseCode !== "0") {
      console.error("STK push was not accepted:", data);
      return null;
    }

    return {
      checkoutRequestId: data.CheckoutRequestID as string,
      merchantRequestId: data.MerchantRequestID as string,
    };
  } catch (error) {
    console.error("initiateStkPush failed:", error);
    return null;
  }
}