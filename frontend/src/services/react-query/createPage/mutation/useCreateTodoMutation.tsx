import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "../../../apiServices/createTodo";

export const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
