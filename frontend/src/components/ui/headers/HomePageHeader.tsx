import { LogOutIcon, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutServiceMutation } from "../../../services/react-query/homePage/mutation/useLogoutServiceMutation";

interface IProps {
  remainingTodosLength: number;
}

const HomePageHeader = ({ remainingTodosLength }: IProps) => {
  const { mutate: logout, isPending } = useLogoutServiceMutation();

  const navigate = useNavigate();

  const logoutHandler = () => {
    logout(undefined, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };

  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-[#7008E7] text-2xl sm:text-3xl font-bold">
          My Todos
        </h1>
        <p className="text-[13px] text-[#99A1AF]">
          {remainingTodosLength} {remainingTodosLength === 1 ? "Task" : "Tasks"}
          {" "}
          Remaining
        </p>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          to="/create"
          className="flex items-center px-3 sm:px-4 py-2 gap-1.5 sm:gap-2 bg-violet-600 rounded-2xl cursor-pointer hover:bg-violet-700 transition-colors duration-150"
        >
          <Plus size={14} color="white" />
          <h2 className="hidden sm:block text-[14px] text-white">New Todo</h2>
        </Link>

        <div
          onClick={logoutHandler}
          className={`flex items-center gap-1.5 sm:gap-2 bg-white px-3 sm:px-4 py-2 rounded-2xl cursor-pointer shadow-md transition-colors duration-150 ${
            isPending ? "cursor-not-allowed opacity-60" : "hover:bg-[#f0f0f017]"
          }`}
        >
          <LogOutIcon color="#4A5565" size={14} />
          <p className="hidden sm:block text-[#4A5565] text-[14px]">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageHeader;
