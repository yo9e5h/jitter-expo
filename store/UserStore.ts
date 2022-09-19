import create from "zustand";
import { persist } from "zustand/middleware";
import { User, UserState } from "../types";
import AuthService from "../services/AuthService";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,

      setUser: async (user: User) => {
        set({ user });
      },

      clearUser: async () => {
        await SecureStore.deleteItemAsync("token");
        await AsyncStorage.removeItem("user");
        set({ user: null });
      },
    }),

    {
      name: "auth-store",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useUserStore;
