import api from "./api";

class CommentService {
  async fetchComments(id: number) {
    try {
      const response = await api.get(`/jits/show/${id}`);
      console.log(response.data);

      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async sendComment(id: number, body: string) {
    try {
      const response = await api.post(`/comments/${id}`, {
        body,
      });
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default new CommentService();
