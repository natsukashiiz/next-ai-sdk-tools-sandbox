"use client";

import { IconPlus } from "@tabler/icons-react";
import { ArrowUpIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { useChat } from "@ai-sdk-tools/store";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

export function MessageInput() {
  const [text, setText] = useState("");
  const { sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/cutomer-support-agent",
      prepareSendMessagesRequest({ messages, id }) {
        return {
          body: {
            message: messages[messages.length - 1],
            chatId: id,
          },
        };
      },
    }),
  });

  const handleSendMessage = async () => {
    if (!text.trim()) return;

    sendMessage({
      text,
    });

    setText("");
  };

  return (
    <InputGroup>
      <InputGroupTextarea
        placeholder="Ask, Search or Chat..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSendMessage();
          }
        }}
      />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          variant="outline"
          className="rounded-full"
          size="icon-xs"
        >
          <IconPlus />
        </InputGroupButton>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <InputGroupButton variant="ghost">Auto</InputGroupButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="top"
            align="start"
            className="[--radius:0.95rem]"
          >
            <DropdownMenuItem>Auto</DropdownMenuItem>
            <DropdownMenuItem>Agent</DropdownMenuItem>
            <DropdownMenuItem>Manual</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <InputGroupButton
          variant="default"
          className="rounded-full ml-auto"
          size="icon-xs"
          disabled={!text.trim() || status === "streaming"}
          onClick={handleSendMessage}
        >
          <ArrowUpIcon />
          <span className="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
