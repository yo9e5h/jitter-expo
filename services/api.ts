import axios from "axios";
import * as SecureStore from "expo-secure-store";

const api = axios.create({
  baseURL: `http://jitter.test/api`,
});

api.interceptors.request.use(
  async (config: any) => {
    const token = await SecureStore.getItemAsync("token");

    console.log(token);

    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
