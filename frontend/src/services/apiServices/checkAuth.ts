import api from "../api/api";

export const checkAuth = async () => {
  const response = await api.get("/auth/check");
  return response.data;
};
