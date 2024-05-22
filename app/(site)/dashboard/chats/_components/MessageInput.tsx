import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { api } from "@/hooks/useApi";
import useChatsStore from "@/zustand/chatStore";
import useUserInfoStore from "@/zustand/userStore";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import React, { useState } from "react";

function MessageInput() {
  const [messageContent, setMessageContent] = useState("");
  const { userId, setMessages } = useChatsStore();
  const { userInfo } = useUserInfoStore();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (messageContent.trim() !== "") {
      const check = await onSendMessage(messageContent);
      if (check) {
        setMessageContent("");
      }
    }
  };

  const onSendMessage = async (messageContent: string) => {
    try {
      const response = await api("POST", "chat/send", {
        senderId: userInfo.id,
        receiverId: userId,
        content: messageContent,
      });
      setMessages(response);
      return true;
    } catch (error) {
      console.error("Error sending message:", error);
      return false;
    }
  };

  return (
    <form
      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
      onSubmit={handleSubmit}
    >
      <Label htmlFor="message" className="sr-only">
        Message
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
      />
      <div className="flex items-center p-3 pt-0">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Attach File</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">Use Microphone</TooltipContent>
        </Tooltip>
        <Button type="submit" size="sm" className="ml-auto gap-1.5">
          Send Message
          <CornerDownLeft className="size-3.5" />
        </Button>
      </div>
    </form>
  );
}

export default MessageInput;
