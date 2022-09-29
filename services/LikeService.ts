import api from "./api";

class LikeService {
  async likeJit(id: number) {
    try {
      const response = await api.post(`/like/${id}`);
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async unLikeJit(id: number) {
    try {
      const response = await api.delete(`/like/${id}`);
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default new LikeService();
