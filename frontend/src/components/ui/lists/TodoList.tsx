import React from "react";
import type { ITodo } from "../../../utils/types";
import { useUpdateTodoMutation } from "../../../services/react-query/homePage/mutation/useUpdateTodoMutation";
import { useNavigate } from "react-router-dom";

interface IProps {
  todos: ITodo[];
}

const TodoList = ({ todos }: IProps) => {
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const navigate = useNavigate();

  const toggleTodo = (item: ITodo) => {
    updateTodo({ id: item._id, data: { completed: !item.completed } });
  };

  return (
    <section className="bg-white rounded-xl mt-5">
      {todos.map((item, index) => (
        <React.Fragment key={item._id}>
          <div
            onClick={() => navigate(`/todo/${item._id}`)}
            className="flex justify-between items-center gap-2 px-5 py-4 cursor-pointer hover:bg-gray-100 transition-colors duration-150"
          >
            <div className="flex items-center gap-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleTodo(item);
                }}
                className={`w-5 h-5 z-5 rounded-full border flex items-center justify-center transition-colors duration-150 ${
                  item.completed
                    ? "bg-white border-violet-600"
                    : "border-gray-300"
                }`}
              >
                {item.completed && (
                  <svg
                    className="w-3 h-3 text-violet-600 z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3
                  className={`text-[15px] ${
                    item.completed
                      ? "line-through text-[#D1D5DC]"
                      : "text-[#364153]"
                  } font-semibold`}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[12px] text-[#99A1AF]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
            <div
              className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${
                item.priority === "High"
                  ? "bg-red-100 text-red-600"
                  : item.priority === "Medium"
                  ? "bg-amber-100 text-amber-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {item.priority}
            </div>
          </div>
          {index !== todos.length - 1 && (
            <div className="w-full bg-gray-200 h-px" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default TodoList;
