import api from "../api/api";

interface IProps {
  email: string;
  password: string;
}

export const login = async (data: IProps) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
