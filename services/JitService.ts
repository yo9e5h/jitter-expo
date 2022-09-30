import api from "./api";

class JitService {
  async getJits() {
    try {
      const response = await api.get(`/jits/`);
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async createJit(body: string) {
    try {
      const response = await api.post(`/jits/`, {
        body,
      });
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default new JitService();
