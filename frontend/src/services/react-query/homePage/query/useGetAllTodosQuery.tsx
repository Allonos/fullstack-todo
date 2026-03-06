import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../../../apiServices/allTodos";

export const useGetAllTodosQuery = (
  filter: "all" | "active" | "completed" = "all",
) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getAllTodos(filter),
    staleTime: 1000 * 60 * 5,
  });
};
