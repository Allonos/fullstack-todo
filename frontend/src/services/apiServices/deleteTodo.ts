import api from "../api/api";

export const deleteTodo = async (id: string) => {
  const response = await api.delete(`/todos/delete/${id}`);
  return response.data;
};
