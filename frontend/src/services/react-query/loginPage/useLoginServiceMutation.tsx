import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../apiServices/login";
import { useAuthStore } from "../../../store/useAuthStore";

interface IProps {
  email: string;
  password: string;
}

export const useLoginServiceMutation = () => {
  const queryClient = useQueryClient();
  const setAuthUser = useAuthStore((s) => s.setAuthUser);

  return useMutation({
    mutationFn: (data: IProps) => login(data),
    onSuccess: (data) => {
      setAuthUser(data);
      queryClient.setQueryData(["checkAuth"], data);
      queryClient.removeQueries({ queryKey: ["todos"] });
    },
  });
};
