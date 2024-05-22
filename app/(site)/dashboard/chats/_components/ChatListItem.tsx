import useChatsStore from "@/zustand/chatStore";
import useUserInfoStore from "@/zustand/userStore";
import React from "react";

function ChatListItem({ chat }: { chat: any }) {
  const { setChannel, setUserId } = useChatsStore();
  const { userInfo } = useUserInfoStore();

  const formatDate = (dateString: string) => {
    // Parse the date string into a JavaScript Date object
    const date = new Date(dateString);

    // Define month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract day and month from the date
    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    // Return formatted date
    return `${day} ${month}`;
  };

  // Determine userId based on the chat object
  const userId =
    userInfo.id === chat.receiverId?._id
      ? chat.senderId?._id
      : chat.receiverId?._id;

  // Determine fullName based on the chat object
  const fullName =
    userId === chat.senderId?._id
      ? chat.senderId?.fullName
      : chat.receiverId?.fullName;

  // Function to get the first letter of the name
  const getFirstLetter = (name: string) => {
    return name?.charAt(0).toUpperCase();
  };

  return (
    <div
      className="entry cursor-pointer transform hover:scale-105 duration-300 border bg-background transition-transform mb-4 rounded p-4 flex shadow-sm"
      onClick={() => {
        setUserId(userId);
        setChannel(chat._id);
      }}
    >
      <div className="flex-2">
        {/* <div className="w-12 h-12 relative">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src="../resources/profile-image.png"
            alt="chat-user"
          />
          <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
        </div> */}
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
          <span className="text-gray-700 font-bold text-lg">
            {getFirstLetter(fullName)}
          </span>
        </div>
      </div>
      <div className="flex-1 px-2">
        <div className="truncate w-32">
          <span className="text-gray-800 text-sm font-medium">{fullName}</span>
        </div>
        <div>
          <small className="text-gray-600 text-xs">
            {chat.messages?.content}
          </small>
        </div>
      </div>
      <div className="flex-2 text-right">
        <div>
          <small className="text-gray-500 text-xs">
            {formatDate(chat.messages?.createdAt)}
          </small>
        </div>
        <div>
          <small className="text-xs bg-primary text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
            23
          </small>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
