import api from "../api/api";

export const getAllTodos = async (
  filter: "all" | "active" | "completed" = "all",
) => {
  const response = await api.get("/todos", { params: { filter } });
  return response.data;
};
