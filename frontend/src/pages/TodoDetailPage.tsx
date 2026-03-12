import { useNavigate, useParams } from "react-router-dom";
import { useTodoDetailQuery } from "../services/react-query/todoDetailPage/query/useTodoDetailQuery";
import TodoDetailSkeleton from "../components/ui/skeletons/TodoDetailSkeleton";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Flag,
  TrashIcon,
} from "lucide-react";
import dayjs from "dayjs";
import { useUpdateTodoMutation } from "../services/react-query/homePage/mutation/useUpdateTodoMutation";
import { useDeleteTodoMutation } from "../services/react-query/todoDetailPage/mutation/useDeleteTodoMutation";

const TodoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: todo, isLoading } = useTodoDetailQuery(id!);
  const { mutate: updateTodo, isPending: isUpdating } = useUpdateTodoMutation();
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodoMutation();

  const isPending = isUpdating || isDeleting;

  const markAsDone = () => {
    updateTodo({ id: todo?._id, data: { completed: !todo?.completed } });
  };

  const handleDeleteTodo = () => {
    deleteTodo(id!);
    navigate("/");
  };

  if (isLoading) {
    return <TodoDetailSkeleton />;
  }

  return (
    <section className="w-full">
      <div
        onClick={() => navigate("/")}
        className={`flex items-center gap-2 ${
          isPending ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        }`}
      >
        <ArrowLeft
          className={`cursor-pointer ${
            isPending ? "cursor-not-allowed opacity-60" : "cursor-pointer"
          }`}
          color="#99A1AF"
          width={16}
          height={16}
        />
        <p className="text-[#99A1AF] text-[14px] font-medium">Back to list</p>
      </div>

      <div className="mt-5 bg-white rounded-2xl shadow-md">
        <div
          className={`px-6 py-3 flex items-center gap-2 rounded-t-2xl ${
            todo.completed
              ? "bg-violet-50 border-b border-violet-100"
              : "bg-gray-50 border-b border-gray-100"
          }`}
        >
          <h3
            className={`px-3 py-0.5 rounded-full ${
              todo.completed
                ? "bg-violet-100 text-violet-600"
                : "bg-gray-200 text-gray-500"
            } text-[12px] font-medium tracking-wider`}
          >
            {todo?.completed ? "Completed" : "Active"}
          </h3>
        </div>
        <div className="w-full bg-gray-200 h-px" />

        <div className="px-4 sm:px-8 py-5 sm:py-8 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-[#1E2939]">{todo?.title}</h1>
          <div className="flex flex-wrap gap-3 items-center">
            <div
              className={`flex gap-2 items-center px-3 py-1 rounded-full ${
                todo?.priority === "High"
                  ? "bg-red-100 text-red-600 border border-red-200"
                  : todo?.priority === "Medium"
                  ? "bg-amber-100 text-amber-600 border border-amber-200"
                  : "bg-green-100 text-green-600 border border-green-200"
              }`}
            >
              <Flag width={12} height={12} />
              <h3 className={`text-[12px] font-medium`}>
                {todo?.priority} Priority
              </h3>
            </div>

            <div className="flex gap-1 items-center">
              <Calendar width={12} height={12} color="#99A1AF" />
              <h3 className="text-[12px] text-[#99A1AF] font-medium">
                {dayjs(todo?.createdAt).format("dddd, MMMM D, YYYY")}
              </h3>
            </div>
          </div>

          <div className="p-5 bg-[#F9FAFB] rounded-lg flex flex-col gap-4">
            <h3 className="text-[#6A7282] text-[13px] font-semibold">
              Description
            </h3>
            <p className="text-[15px] text-[#4A5565] font-medium">
              {todo?.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <button
              onClick={markAsDone}
              disabled={todo?.completed || isPending}
              className={`flex sm:flex-2/3 border justify-center items-center gap-2 rounded-2xl transition-colors duration-150 px-4 py-3 text-white ${
                todo?.completed || isPending
                  ? "border-violet-200 bg-violet-300 cursor-not-allowed"
                  : "border-violet-400 bg-violet-600 hover:bg-violet-700 cursor-pointer"
              }`}
            >
              <CheckCircle2 width={14} height={14} />
              <h2 className="text-[14px] font-bold">
                {todo?.completed ? "Completed" : "Mark as Done"}
              </h2>
            </button>
            <div
              onClick={handleDeleteTodo}
              className={`flex border border-red-300 sm:flex-1/3 px-4 py-3 bg-red-50 rounded-2xl justify-center items-center gap-2 transition-colors duration-150 ${
                isPending
                  ? "cursor-not-allowed opacity-60"
                  : "cursor-pointer hover:bg-red-100"
              }`}
            >
              <TrashIcon color="#FF6467" width={15} height={15} />
              <h3 className="text-[14px] font-bold text-red-400">Delete</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoDetailPage;
