import create from "zustand";
import SendJitService from "../services/SendJitService";
import { SendJitState } from "../types";

const useSendJitStore = create<SendJitState>((set) => ({
  draftJit: "",
  sendJitLoading: false,
  sendJitError: null,

  sendJit: (body: string) => {
    SendJitService.sendJit(body);
    set({ draftJit: "" });
  },
}));

export default useSendJitStore;
