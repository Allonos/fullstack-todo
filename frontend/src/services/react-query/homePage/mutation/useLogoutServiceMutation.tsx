import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../../apiServices/logout";
import { useAuthStore } from "../../../../store/useAuthStore";

export const useLogoutServiceMutation = () => {
  const queryClient = useQueryClient();
  const setAuthUser = useAuthStore((s) => s.setAuthUser);

  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ["checkAuth"] });
      queryClient.removeQueries({ queryKey: ["todos"] });
      setAuthUser(null);
    },
  });
};
