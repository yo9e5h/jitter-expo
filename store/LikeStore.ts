import create from "zustand";
import { persist } from "zustand/middleware";
import LikeService from "../services/LikeService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LikeState } from "../types";

const useLikeStore = create<LikeState>()(
  persist(
    (set) => ({
      likes: [],
      isLiked: false,

      fetchLikes: async () => {
        try {
          const response = await LikeService.fetchLikes();
          set({ likes: response.data });
        } catch {
          console.log("error");
        }
      },

      likeJit: async (id: number) => {
        try {
          const response = await LikeService.likeJit(id);
          console.log(response);

          set({ isLiked: true });
        } catch {
          console.log("error");
        }
      },

      unLikeJit: async (id: number) => {
        set((state) => ({
          likes: state.likes.filter((like) => like !== id),
        }));
        LikeService.unLikeJit(id).then((data) => {
          console.log(data);
        });
      },

      checkIfLiked: async (id: number) => {
        set((state) => ({
          isLiked: state.likes.includes(id),
        }));
      },

      clearLikes: async () => {
        set(() => ({
          likes: [],
        }));
      },
    }),

    {
      name: "like-store",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useLikeStore;
