import api from "./api";

class JitService {
  async getJits() {
    try {
      const { data } = await api.get(`/jits`);
      console.log(data);
      return data;
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
