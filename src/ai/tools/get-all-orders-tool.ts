import { tool } from "ai";
import { z } from "zod";

const orders = [
  {
    id: "1",
    customerId: "1",
    amount: 100,
    status: "pending",
  },

  {
    id: "2",
    customerId: "2",
    amount: 200,
    status: "completed",
  },
];

export const getAllOrdersTool = tool({
  name: "get-orders",
  description: "Get all orders",
  inputSchema: z.object({}),
  execute: async () => {
    return {
      orders,
    };
  },
});
