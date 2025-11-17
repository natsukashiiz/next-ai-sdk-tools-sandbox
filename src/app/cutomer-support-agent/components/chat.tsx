import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageInput } from "./message-input";
import { MessageList } from "./message-list";

export function Chat() {
  return (
    <div className="h-screen">
      <div className="max-w-2xl w-full space-y-4 mx-auto">
        <ScrollArea className="h-[84vh] px-4 py-2">
          <MessageList />
        </ScrollArea>
        <MessageInput />
      </div>
    </div>
  );
}
