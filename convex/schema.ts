import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  donations: defineTable({
    donorName: v.string(),
    email: v.string(),
    phone: v.string(),
    amount: v.number(),
    currency: v.string(),
    checkoutRequestId: v.string(), // returned by Daraja when STK push is sent
    merchantRequestId: v.optional(v.string()),
    mpesaReceiptNumber: v.optional(v.string()), // set once payment is confirmed
    status: v.string(), // "pending" | "success" | "failed"
  }).index("by_checkoutRequestId", ["checkoutRequestId"]),
});