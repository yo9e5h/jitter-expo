import create from "zustand";
import { persist } from "zustand/middleware";
import { CommentState } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CommentService from "../services/CommentService";

const useCommentStore = create<CommentState>()(
  persist(
    (set) => ({
      comments: [],
      commentsLoading: true,
      commentsError: null,

      fetchComments: async (id: number) => {
        CommentService.fetchComments(id).then((comments) => {
          set({ comments });
        });
        set({ commentsLoading: false });
      },

      clearComments: async () => {
        set({ comments: [] });
      },
    }),
    {
      name: "comments-store",
      getStorage: () => AsyncStorage,
    }
  )
);

export default useCommentStore;
