import create from "zustand";
import { persist } from "zustand/middleware";
import { JitState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const useJitStore = create<JitState>()(
  persist(
    (set) => ({
      jits: [],
      jitLoading: true,
      jitError: null,

      setJits: async () => {
        api
          .get("/jits", {
            headers: {
              Authorization: `Bearer 1|nzA4iIAWo0UkWzOhOmc6JlZ5Wg7cK5EBg2EcVaXm`,
            },
          })
          .then((response) => {
            set({
              jits: response.data.data,
              jitLoading: false,
            });
          });
      },

      clearJits: async () => {
        set({ jits: [] });
      },
    }),

    {
      name: "jit-store",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useJitStore;
