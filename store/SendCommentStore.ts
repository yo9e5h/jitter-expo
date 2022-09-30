import create from "zustand";
import { SendCommentState } from "../types";
import CommentService from "../services/CommentService";

const useSendCommentStore = create<SendCommentState>()((set) => ({
  draftComment: "",
  sendCommentLoading: false,
  sendCommentError: null,

  sendComment: async (id: number, body: string) => {
    set({ sendCommentLoading: true });
    CommentService.sendComment(id, body).then((comment) => {
      console.log(comment);
      set({ draftComment: "" });
    });
    set({ sendCommentLoading: false });
  },
}));

export default useSendCommentStore;
