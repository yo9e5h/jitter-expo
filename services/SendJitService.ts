import api from "./api";

class SendJitService {
  async sendJit(body: string) {
    try {
      const response = await api.post("/jits", {
        body,
      });
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default new SendJitService();
