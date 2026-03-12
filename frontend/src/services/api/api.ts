import axios from "axios";

const api = axios.create({
  // baseURL: "https://fullstack-todo-fqkg.onrender.com/api",
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
});

export default api;
