/*
1) Customer Support Agent

ทำอะไรได้บ้าง

ตอบคำถามลูกค้าอัตโนมัติ

ดึงข้อมูลจากฐานข้อมูล เช่น คำสั่งซื้อ

แจ้งปัญหา ส่ง ticket เข้าระบบ

เรียนรู้จาก FAQ / API
*/

import { Agent } from "@ai-sdk-tools/agents";
import { openai } from "@ai-sdk/openai";
import { memoryProvider } from "../memory-provider";
import { getAllOrdersTool } from "../tools/get-all-orders-tool";

const faqAgent = new Agent({
  name: "FAQ Specialist",
  model: openai("gpt-4o"), // Good at answering FAQs
  instructions: "Answer customer questions based on FAQ data.",
});

const orderAgent = new Agent({
  name: "Order Specialist",
  model: openai("gpt-4o"), // Good at handling order-related queries
  instructions: "Assist customers with order status and details.",
  tools: {
    getAllOrders: getAllOrdersTool,
  },
});

const ticketAgent = new Agent({
  name: "Ticket Specialist",
  model: openai("gpt-4o"), // Good at issue reporting
  instructions: "Create support tickets for unresolved issues.",
});

const customerSupportAgent = new Agent({
  name: "Customer Support Manager",
  model: openai("gpt-4o-mini"),
  instructions: "Manage customer support interactions.",
  handoffs: [faqAgent, orderAgent, ticketAgent],
  memory: {
    provider: memoryProvider,
    workingMemory: {
      enabled: true,
      scope: "chat",
    },
    history: {
      enabled: true,
      limit: 10,
    },
    chats: {
      enabled: true,
      generateTitle: true,
    },
  },
});

export { customerSupportAgent };
