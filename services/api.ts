import axios from "axios";

const api = axios.create({
  baseURL: "http://jitter.test/api",
});

export default api;
