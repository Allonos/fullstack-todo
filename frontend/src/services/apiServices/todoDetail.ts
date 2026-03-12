import api from "../api/api";

export const getTodoDetail = async (id: string) => {
  const response = await api.get(`/todos/${id}`);
  return response.data;
};
