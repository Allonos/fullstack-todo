import { ArrowLeft, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTodoMutation } from "../services/react-query/createPage/mutation/useCreateTodoMutation";
import toast from "react-hot-toast";
import { type Priority, priorityOptions } from "../utils/constants/properties";

const CreateTodo = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");

  const { mutate: createTodo, isPending } = useCreateTodoMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Title is required");
      return;
    }

    createTodo(
      {
        title: title.trim(),
        description: description.trim(),
        priority,
      },
      {
        onSuccess: () => {
          toast.success("Todo created!");
          navigate("/");
        },
        onError: () => {
          toast.error("Failed to create todo");
        },
      },
    );
  };

  return (
    <section className="min-w-125">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <ArrowLeft
          className="cursor-pointer"
          color="#99A1AF"
          width={16}
          height={16}
        />
        <p className="text-[#99A1AF] text-[14px] font-medium">Back to list</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-5 bg-white rounded-2xl shadow-md"
      >
        <div
          className={`px-6 py-3 flex items-center gap-2 rounded-t-2xl`}
        >
          <h1 className="text-[22px] font-bold text-[#1E2939]">
            Create New Todo
          </h1>
        </div>

        <div className="px-6 py-3 flex flex-col gap-8">
          <div className="flex flex-col gap-1.5">
            <label
              className="text-gray-600"
              style={{ fontSize: "0.85rem", fontWeight: 600 }}
            >
              Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="What needs to be done?"
              className={`w-full border rounded-xl px-4 py-3 outline-none transition-all text-gray-700 placeholder-gray-300 ${"border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100"} ${
                isPending ? "cursor-not-allowed opacity-60" : ""
              }`}
              style={{ fontSize: "0.95rem" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isPending}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              className="text-gray-600"
              style={{ fontSize: "0.85rem", fontWeight: 600 }}
            >
              Description
            </label>
            <textarea
              placeholder="Add some details (optional)"
              rows={4}
              className={`w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all text-gray-700 placeholder-gray-300 resize-none ${
                isPending ? "cursor-not-allowed opacity-60" : ""
              }`}
              style={{ fontSize: "0.95rem" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isPending}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-gray-600"
              style={{ fontSize: "0.85rem", fontWeight: 600 }}
            >
              Priority
            </label>
            <div className="flex gap-3">
              {priorityOptions.map((priorityOption) => (
                <button
                  type="button"
                  key={priorityOption.value}
                  onClick={() => setPriority(priorityOption.value)}
                  className={`flex-1 py-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                    priority === priorityOption.value
                      ? `${priorityOption.bg} ${priorityOption.color} border-current`
                      : "bg-gray-50 text-gray-400 border-transparent hover:border-gray-200"
                  } ${isPending ? "cursor-not-allowed opacity-60" : ""}`}
                  style={{ fontSize: "0.85rem", fontWeight: 600 }}
                  disabled={isPending}
                >
                  {priorityOption.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className={`mt-2 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-xl transition-colors shadow-md ${
              isPending ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            }`}
            style={{ fontSize: "0.95rem", fontWeight: 600 }}
            disabled={isPending}
          >
            <Plus size={18} />
            Create Todo
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateTodo;
