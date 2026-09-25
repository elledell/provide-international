import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Called right after Daraja accepts the STK push request.
export const createPendingDonation = mutation({
  args: {
    donorName: v.string(),
    email: v.string(),
    phone: v.string(),
    amount: v.number(),
    currency: v.string(),
    checkoutRequestId: v.string(),
    merchantRequestId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("donations", {
      ...args,
      status: "pending",
    });
  },
});

// Called by the /api/mpesa/callback route once Safaricom confirms the payment.
export const updateDonationStatus = mutation({
  args: {
    checkoutRequestId: v.string(),
    status: v.string(),
    mpesaReceiptNumber: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const donation = await ctx.db
      .query("donations")
      .withIndex("by_checkoutRequestId", (q) =>
        q.eq("checkoutRequestId", args.checkoutRequestId)
      )
      .unique();

    if (!donation) {
      console.error("No donation found for checkoutRequestId:", args.checkoutRequestId);
      return null;
    }

    await ctx.db.patch(donation._id, {
      status: args.status,
      mpesaReceiptNumber: args.mpesaReceiptNumber,
    });
  },
});

// Used by the frontend to reactively watch a donation's status after STK push is sent.
export const getDonationStatus = query({
  args: { checkoutRequestId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("donations")
      .withIndex("by_checkoutRequestId", (q) =>
        q.eq("checkoutRequestId", args.checkoutRequestId)
      )
      .unique();
  },
});