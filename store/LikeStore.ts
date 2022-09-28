import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware";
import api from "../services/api";
import { LikeState } from "../types";

const useLikeStore = create<LikeState>(() => ({
  isLiked: false,
  likeJit: async (id: number) => {
    axios({
      method: "POST",
      url: `http://jitter.test/api/like/${id}`,
      headers: {
        Authorization: "Bearer 1|nzA4iIAWo0UkWzOhOmc6JlZ5Wg7cK5EBg2EcVaXm",
      },
    }).then((response) => console.log(response.data));
  },
  unLikeJit: async (id: number) => {
    axios({
      method: "DELETE",
      url: `http://jitter.test/api/like/${id}`,
      headers: {
        Authorization: "Bearer 1|nzA4iIAWo0UkWzOhOmc6JlZ5Wg7cK5EBg2EcVaXm",
      },
    }).then((response) => console.log(response.data));
  },
}));

export default useLikeStore;
