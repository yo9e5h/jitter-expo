import create from "zustand";
import { persist } from "zustand/middleware";
import { JitState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JitService from "../services/JitService";

const useJitStore = create<JitState>()(
  persist(
    (set) => ({
      jits: [],
      jitLoading: true,
      jitError: null,

      fetchJits: async () => {
        JitService.getJits().then((jits) => {
          set((state) => ({
            ...state,
            jits: jits.data,
            jitLoading: false,
          }));
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
