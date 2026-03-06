import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../../apiServices/deleteTodo";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
