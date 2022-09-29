import create from "zustand";
import LikeService from "../services/LikeService";
import { LikeState } from "../types";

const useLikeStore = create<LikeState>(() => ({
  isLiked: false,
  likeJit: async (id: number) => {
    LikeService.likeJit(id).then((data) => {
      console.log(data);
    });
  },

  unLikeJit: async (id: number) => {
    LikeService.unLikeJit(id).then((data) => {
      console.log(data);
    });
  },
}));

export default useLikeStore;
