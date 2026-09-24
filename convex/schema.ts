import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  donations: defineTable({
    donorName: v.string(),
    email: v.string(),
    amount: v.number(),
    currency: v.string(),
    flutterwaveTransactionId: v.string(),
    status: v.string(),
  }),
});