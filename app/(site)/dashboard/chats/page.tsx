"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import MessageInput from "./_components/MessageInput";
import ChatList from "./_components/ChatList";
import MessageList from "./_components/MessageList";
import { Button } from "@/components/ui/button";
import useChatsStore, { Chat } from "@/zustand/chatStore";

export default function Dashboard() {
  const { channel, setChannel } = useChatsStore();

  return (
    <div className="flex flex-col">
      <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <ChatList />
        <div
          className={`relative ${
            channel ? "flex flex-col" : "hidden"
          } md:flex md:flex-col h-[90vh] rounded-xl bg-muted/50 p-4 lg:col-span-2`}
        >
          <Button
            variant="outline"
            className={`absolute ${channel ? "flex" : "hidden"} md:hidden`}
            onClick={() => setChannel(null)}
          >
            Back
          </Button>
          <ScrollArea className="h-[85%] overflow-hidden">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <MessageList />
          </ScrollArea>

          <div className="flex-1" />
          <MessageInput />
        </div>
      </main>
    </div>
  );
}
