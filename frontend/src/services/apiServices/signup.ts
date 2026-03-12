import api from "../api/api";

interface IProps {
  fullName: string;
  email: string;
  password: string;
}

export const signup = async (data: IProps) => {
  const response = await api.post("/auth/signup", data);
  return response.data;
};
