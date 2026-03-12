import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../../../apiServices/checkAuth";

export const useCheckAuthServiceQuery = () => {
  return useQuery({
    queryKey: ["checkAuth"],
    queryFn: checkAuth,
    retry: false,
  });
};
