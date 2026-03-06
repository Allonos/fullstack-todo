import { useQuery } from "@tanstack/react-query";
import { getTodoDetail } from "../../../apiServices/todoDetail";

export const useTodoDetailQuery = (id: string) => {
  return useQuery({
    queryKey: ["todoDetail", id],
    queryFn: () => getTodoDetail(id),
    staleTime: 1000 * 60 * 5,
  });
};
