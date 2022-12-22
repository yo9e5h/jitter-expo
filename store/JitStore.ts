import create from "zustand";
import { persist } from "zustand/middleware";
import { JitState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import JitService from "../services/JitService";

const useJitStore = create<JitState>()(
  persist(
    (set) => ({
      jits: [],
      // pagination: {
      //   current_page: 1,
      //   data: [],
      //   first_page_url: "http://jitter.test/api/jits?page=1",
      //   from: 1,
      //   next_page_url: "http://jitter.test/api/jits?page=2",
      //   path: "http://jitter.test/api/jits",
      //   per_page: 10,
      //   prev_page_url: null,
      //   to: 10,
      // },

      jitLoading: true,
      jitError: null,

      fetchJits: async () => {
        try {
          const response = await JitService.getJits();
          console.log(response);

          set({
            jits: response.data,
            // pagination: response,
            jitLoading: false,
          });
        } catch (err: any) {
          set({ jitError: err.message, jitLoading: false });
        }
      },

      fetchNextJitsLoading: false,
      fetchNextJitsError: null,

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
