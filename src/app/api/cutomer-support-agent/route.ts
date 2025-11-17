import { customerSupportAgent } from "@/ai/agents/cutomer-support-agent";
import { UIMessage } from "ai";

export async function POST(req: Request) {
  const { chatId, message }: { chatId: string; message: UIMessage } =
    await req.json();

  return customerSupportAgent.toUIMessageStream({
    message,
    maxRounds: 5, // Max handoffs
    maxSteps: 10, // Max tool calls per agent
    context: { chatId },
    onError: (error) => {
      console.error("error:", error);

      return error instanceof Error
        ? error.message
        : "An unknown error occurred.";
    },
  });
}
