import api from "./api";

class SendJitService {
  async sendJit(body: string) {
    try {
      const response = await api.post("/jits", {
        body,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SendJitService();
