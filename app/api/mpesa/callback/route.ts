import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("Daraja Callback Received:", JSON.stringify(body, null, 2));

  const stkCallback = body?.Body?.stkCallback;
  if (!stkCallback) {
    console.error("Unexpected callback shape:", body);
    return NextResponse.json({ ResultCode: 1, ResultDesc: "Invalid payload" });
  }

  const checkoutRequestId = stkCallback.CheckoutRequestID;
  const resultCode = stkCallback.ResultCode;

  if (resultCode === 0) {
    // Payment succeeded — extract the M-Pesa receipt number from CallbackMetadata
    const items = stkCallback.CallbackMetadata?.Item ?? [];
    const receipt = items.find((i: any) => i.Name === "MpesaReceiptNumber")?.Value;

    await convex.mutation(api.donations.updateDonationStatus, {
      checkoutRequestId,
      status: "success",
      mpesaReceiptNumber: receipt ? String(receipt) : undefined,
    });
  } else {
    // Payment failed or was cancelled by the donor
    await convex.mutation(api.donations.updateDonationStatus, {
      checkoutRequestId,
      status: "failed",
    });
  }

  // Safaricom expects a 200 with this shape to acknowledge receipt
  return NextResponse.json({ ResultCode: 0, ResultDesc: "Accepted" });
}