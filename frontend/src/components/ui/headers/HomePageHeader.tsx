import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {
  remainingTodosLength: number;
}

const HomePageHeader = ({ remainingTodosLength }: IProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[#7008E7] text-3xl font-bold">My Todos</h1>
        <p className="text-[13px] text-[#99A1AF]">
          {remainingTodosLength} {remainingTodosLength === 1 ? "Task" : "Tasks"}
          {" "}
          Remaining
        </p>
      </div>
      <Link
        to="/create"
        className="flex items-center px-4 gap-2 bg-violet-600 rounded-2xl cursor-pointer hover:bg-violet-700 transition-colors duration-150"
      >
        <Plus width={20} height={20} color="white" />
        <h2 className="text-[14px] text-white">New Todo</h2>
      </Link>
    </div>
  );
};

export default HomePageHeader;
