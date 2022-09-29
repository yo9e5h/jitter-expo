import create from "zustand";
import { persist } from "zustand/middleware";
import { JitState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import JitService from "../services/JitService";

const useJitStore = create<JitState>()(
  persist(
    (set) => ({
      jits: [],
      jitLoading: true,
      jitError: null,

      setJits: async () => {
        JitService.getJits().then((jits) => {
          set({ jits });
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
