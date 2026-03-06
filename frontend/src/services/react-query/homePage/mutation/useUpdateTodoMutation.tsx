import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "../../../apiServices/updateTodo";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      queryClient.invalidateQueries({ queryKey: ["todoDetail", variables.id] });
    },
  });
};
