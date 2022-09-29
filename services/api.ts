import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

api.interceptors.request.use(
  async (config: any) => {
    const token = process.env.TOKEN;

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
