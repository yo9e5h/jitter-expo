import create from "zustand";
import { persist } from "zustand/middleware";
import { Jit, JitState } from "../types";
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
              Authorization: `Bearer MQ.cBWg0D_ISc2jkeJcLFmNxKawtslEoMC89zRGp8qfUKioK1un1HzNM8zIuBF1`,
            },
          })
          .then((response) => {
            set({
              jits: response.data,
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
