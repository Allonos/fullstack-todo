import { Lock, LogInIcon, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginServiceMutation } from "../services/react-query/loginPage/useLoginServiceMutation";
import toast from "react-hot-toast";

interface IProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<IProps>({
    email: "",
    password: "",
  });

  const { mutate: login, error } = useLoginServiceMutation();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(formData, {
      onSuccess: () => navigate("/"),
      onError: () => {
        toast.error(error instanceof Error ? error.message : "Login failed");
      },
    });
  };

  return (
    <section className="min-w-125 flex flex-col items-center">
      <div className="bg-violet-600 flex items-center justify-center w-14 h-14 rounded-2xl">
        <LogInIcon color="white" />
      </div>
      <h1 className="text-[32px] font-bold text-center text-violet-600 mt-4">
        Welcome Back
      </h1>

      <p className="text-[14px] text-[#99A1AF]">Login to access your todos</p>

      <form
        className="bg-white p-8 mt-5 rounded-2xl w-full flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="font-[13px] text-[#4A5565] text-semibold">
            Email
          </label>
          <div className="relative mt-1">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="font-[13px] text-[#4A5565] text-semibold">
            Password
          </label>
          <div className="relative mt-1">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md p-2 pl-9 w-full"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-violet-600 text-white py-2 px-4 rounded-md w-full hover:bg-violet-700 transition-colors cursor-pointer"
          >
            Login
          </button>
        </div>

        <div>
          <p className="text-center font-[13px] text-[#99A1AF]">
            Don't have an account?{" "}
            <span
              className="text-violet-600 font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
