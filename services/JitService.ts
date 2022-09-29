import api from "./api";

class JitService {
  async getJits() {
    try {
      const response = await api.get(`/jits/`);
      return response.data.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async getJit(id: string) {
    try {
      const response = await api.get(`/jits/${id}`);
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
