import type { ITodo } from "../../utils/types";
import api from "../api/api";

interface IProps {
  id: string;
  data: Partial<ITodo>;
}

export const updateTodo = async ({ id, data }: IProps) => {
  const response = await api.put(`/todos/update/${id}`, data);
  return response.data;
};
