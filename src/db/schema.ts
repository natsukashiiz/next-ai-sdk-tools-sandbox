import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const workingMemory = pgTable("working_memory", {
  id: text("id").primaryKey(),
  scope: text("scope").notNull(),
  chatId: text("chat_id"),
  userId: text("user_id"),
  content: text("content").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const messages = pgTable("conversation_messages", {
  id: serial("id").primaryKey(),
  chatId: text("chat_id").notNull(),
  userId: text("user_id"),
  role: text("role").notNull(),
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").notNull(),
});
