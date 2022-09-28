import { LoginFormData, RegisterFormData } from "../types";
import api from "./api";
import * as SecureStore from "expo-secure-store";

class AuthService {
  async login(data: LoginFormData) {
    const email = data.email;
    const password = data.password;
    try {
      const response = await api.post("/login", {
        email,
        password,
      });
      await SecureStore.setItemAsync("token", response.data.token);
      console.log(response.data.token);

      return response.data;
    } catch (err: any) {
      const error = err.response.data.message;
      throw error;
    }
  }

  async register(data: RegisterFormData) {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new AuthService();
