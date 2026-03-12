import { useState } from "react";
import HomePageHeader from "../components/ui/headers/HomePageHeader";
import TodoList from "../components/ui/lists/TodoList";
import TodoListSkeleton from "../components/ui/lists/TodoListSkeleton";
import HomePageTabs from "../components/ui/tabs/HomePageTabs";
import { useGetAllTodosQuery } from "../services/react-query/homePage/query/useGetAllTodosQuery";
import type { ITodo } from "../utils/types";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">(
    "all",
  );
  const { data, isLoading } = useGetAllTodosQuery(activeTab);

  const remainingTodos =
    data?.filter((todo: ITodo) => !todo.completed).length || 0;

  return (
    <section className="w-full">
      <HomePageHeader remainingTodosLength={remainingTodos} />
      <HomePageTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {isLoading ? <TodoListSkeleton /> : <TodoList todos={data} />}
    </section>
  );
};

export default HomePage;
