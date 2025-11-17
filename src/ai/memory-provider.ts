import { db } from "@/db";
import { messages, workingMemory } from "@/db/schema";
import { DrizzleProvider } from "@ai-sdk-tools/memory/drizzle";

export const memoryProvider = new DrizzleProvider(db, {
  workingMemoryTable: workingMemory,
  messagesTable: messages,
});
