import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../apiServices/signup";

interface IProps {
  fullName: string;
  email: string;
  password: string;
}

export const useSignupServiceMutation = () => {
  return useMutation({
    mutationFn: (data: IProps) => signup(data),
  });
};
