import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const login = (email, password) => {
  return axiosInstance.post("/users/login", { email, password });
};
