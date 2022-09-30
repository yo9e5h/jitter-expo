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

      likeJit: async (id: number) => {
        set((state) => ({
          likes: [...state.likes, id],
        }));
        LikeService.likeJit(id).then((data) => {
          console.log(data);
        });
      },

      unLikeJit: async (id: number) => {
        set((state) => ({
          likes: state.likes.filter((like) => like !== id),
        }));
        LikeService.unLikeJit(id).then((data) => {
          console.log(data);
        });
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
