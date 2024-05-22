import { create } from "zustand";

export type Message = {
  _id: string;
  channelId: string;
  content: string;
  createdAt: string;
  receiverId: string;
  senderId: string;
  updatedAt: string;
};

export type User = {
  _id: string;
  fullName: string;
};

export type Chat = {
  createdAt: string;
  messages: Message;
  receiverId: User;
  senderId: User;
  updatedAt: string;
  _id: string;
};

type ChatsStore = {
  chats: Chat[];
  userId: string | null;
  channel: string | null;
  messages: Message[];
  setMessages: (message: Message) => void;
  setChannel: (channelId: string | null) => void;
  setUserId: (chatId: string | null) => void;
  addChat: (chat: Chat) => void;
  resetChats: () => void;
  resetMessages: () => void;
};

const useChatsStore = create<ChatsStore>((set) => ({
  chats: [],
  userId: null,
  channel: null,
  messages: [],
  setMessages: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  addChat: (chat) => set((state) => ({ chats: [...state.chats, chat] })),
  setUserId: (chatId) => set({ userId: chatId }),
  setChannel: (channelId) => set({ channel: channelId }),
  resetChats: () => set({ chats: [] }),
  resetMessages: () => set({ messages: [] }),
}));

export default useChatsStore;
