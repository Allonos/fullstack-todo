import api from "../api/api";

interface IProps {
  title: string;
  description?: string;
  priority: "Low" | "Medium" | "High";
}

export const createTodo = async (data: IProps) => {
  const response = await api.post("/create", data);
  return response.data;
};
