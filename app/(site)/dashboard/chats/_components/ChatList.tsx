import React, { useEffect } from "react";
import ChatListItem from "./ChatListItem";
import useChatsStore, { Chat } from "@/zustand/chatStore";
import { api } from "@/hooks/useApi";
import useUserInfoStore from "@/zustand/userStore";

function ChatList() {
  const { userInfo } = useUserInfoStore();
  const { resetChats, addChat, chats, channel } = useChatsStore();
  useEffect(() => {
    if (userInfo.id != "") {
      FetchChats();
    }
  }, [userInfo]);

  const FetchChats = async () => {
    const response = await api("GET", `chat/${userInfo?.id}`);

    resetChats();
    response.forEach((chat: Chat) => {
      addChat(chat);
    });
  };

  return (
    <div
      className={`relative ${
        channel ? "hidden" : ""
      } flex-col items-start gap-8 md:flex`}
      x-chunk="dashboard-03-chunk-0"
    >
      <div className="w-full h-full bg-muted/50 items-start rounded-lg p-4">
        {chats.map((chat: any, index: number) => (
          <ChatListItem key={index} chat={chat} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
