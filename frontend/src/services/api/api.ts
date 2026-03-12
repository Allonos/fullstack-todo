import axios from "axios";

const api = axios.create({
  baseURL: "https://fullstack-todo-fqkg.onrender.com/api",
  withCredentials: true,
});

export default api;
