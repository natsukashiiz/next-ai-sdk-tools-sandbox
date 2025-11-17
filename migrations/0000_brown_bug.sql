CREATE TABLE "conversation_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"chat_id" text NOT NULL,
	"user_id" text,
	"role" text NOT NULL,
	"content" text NOT NULL,
	"timestamp" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "working_memory" (
	"id" text PRIMARY KEY NOT NULL,
	"scope" text NOT NULL,
	"chat_id" text,
	"user_id" text,
	"content" text NOT NULL,
	"updated_at" timestamp NOT NULL
);
