import api from "../api/api";

export const deleteTodo = async (id: string) => {
  const response = await api.delete(`/delete/${id}`);
  return response.data;
};
