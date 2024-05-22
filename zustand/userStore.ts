import { create } from "zustand";
import {
  createJSONStorage,
  persist,
} from "zustand/middleware";

export type UserInfo = {
  readonly id?: string;
  fullName: string;
  email: string;
  accessToken: string | null;
  isAdminVerified: boolean;
  isOnline: boolean;
  isPasswordChanged: boolean;
  isTwoStepVerification: boolean;
  isUserVerified: boolean;
  role: string[];
  companyName: string;
  fcmToken: string;
};

type UserInfoStore = {
  userInfo: UserInfo;
  updateUserInfo: (userInfo: UserInfo) => void;
  logout: () => void;
};

const useUserInfoStore = create(
  persist<UserInfoStore>(
    (set) => ({
      userInfo: {
        id: "",
        fullName: "",
        email: "",
        accessToken: null,
        isAdminVerified: false,
        isOnline: false,
        isPasswordChanged: false,
        isTwoStepVerification: false,
        isUserVerified: false,
        role: ["User"],
        companyName: "",
        fcmToken: "",
      },
      updateUserInfo: (userInfo) => {
        return set((state) => ({
          userInfo: {
            ...state.userInfo,
            ...userInfo,
          },
        }));
      },
      logout: () => {
        return set((state) => ({
          userInfo: {
            ...state.userInfo,
            id: "",
            fullName: "",
            email: "",
            token: null,
            isAdminVerified: false,
            isOnline: false,
            isPasswordChanged: false,
            isTwoStepVerification: false,
            isUserVerified: false,
            role: ["User"],
            companyName: "",
            fcmToken: "",
          },
        }));
      },
    }),
    {
      name: "userInfo",
      storage: createJSONStorage(() => localStorage),
      // skipHydration: true,
    }
  )
);

export default useUserInfoStore;
