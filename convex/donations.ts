import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveDonation = mutation({
  args: {
    donorName: v.string(),
    email: v.string(),
    amount: v.number(),
    currency: v.string(),
    flutterwaveTransactionId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const donationId = await ctx.db.insert("donations", {
      ...args,
    });
    return donationId;
  },
});