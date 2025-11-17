"use client";

import { cn } from "@/lib/utils";
import { useChatMessages, useChatStatus } from "@ai-sdk-tools/store";
import { useEffect, useRef } from "react";

export function MessageList() {
  const messages = useChatMessages();
  const status = useChatStatus();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, status]);

  return (
    <div ref={containerRef} className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "whitespace-pre-wrap space-y-2 p-2 w-fit",
            message.role === "user" ? "bg-primary-foreground rounded-xl" : ""
          )}
        >
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}
      {/* {status === "streaming" && (
        <div className="bg-primary-foreground border p-4 rounded-lg">
          Thinking...
        </div>
      )} */}
    </div>
  );
}
