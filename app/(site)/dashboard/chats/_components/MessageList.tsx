// MessageList.jsx
import React, { useEffect, useRef, useState } from "react";
import MessageItem from "./MessageItem";
import { api } from "@/hooks/useApi";
import useChatsStore, { Message } from "@/zustand/chatStore";
import useUserInfoStore from "@/zustand/userStore";

function MessageList() {
  const [messagesLoading, setMessagesLoading] = useState<boolean>(false);
  const { channel, messages, setMessages, resetMessages } = useChatsStore();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { userInfo } = useUserInfoStore();

  useEffect(() => {
    if (channel != null) {
      handleOpenChat(channel);
    }
  }, [channel]);

  const handleOpenChat = async (channelId: string | null) => {
    setMessagesLoading(true);
    try {
      const response = await api("GET", `chat/history/${channelId}`);
      resetMessages();
      response.forEach((message: Message) => {
        setMessages(message);
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setMessagesLoading(false);
    }
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  // const scrollToBottom = () => {
  //   if (messagesEndRef.current) {
  //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="h-[85%] overflow-hidden">
      {messagesLoading ? (
        // Render skeleton loader while messages are being fetched
        <div className="grid animate-pulse">
          <div className="flex gap-2.5 w-[50%]">
            {/* Placeholder for user image */}
            <div className="w-10 h-11 bg-gray-300 rounded-full justify-center"></div>

            <div className="grid w-full">
              {/* Placeholder for user name */}
              <div className="w-full h-4 bg-gray-300 rounded"></div>

              <div className="w-full grid">
                {/* Placeholder for message content */}
                <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                  <div className="w-full h-4 bg-gray-300 rounded"></div>
                </div>
                {/* Placeholder for message timestamp */}
                <div className="justify-end items-center inline-flex">
                  <div className="w-full h-4 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        messages?.map((message: any, index: any) => {
          // Check if the current message is from you or from the other user
          const isYourMessage = message.receiverId === userInfo.id;
          const isNotYourMessage = message.receiverId !== userInfo.id;

          // Check if this is the first message or if the previous message was from the other user
          const isFirstOrPreviousIsNotYours =
            index === 0 || messages[index - 1].receiverId !== userInfo.id;
          const isFirstOrPreviousIsYours =
            index === 0 || messages[index - 1].receiverId === userInfo.id;

          // Render the image only if it's your message and it's the first message or the previous message was not yours
          const renderImageForYou =
            isYourMessage && isFirstOrPreviousIsNotYours;
          const renderImageForUser =
            isNotYourMessage && isFirstOrPreviousIsYours;

          return (
            <MessageItem
              key={index}
              message={message}
              renderImageForYou={renderImageForYou}
              renderImageForUser={renderImageForUser}
              userInfo={userInfo}
            />
          );
        })
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
