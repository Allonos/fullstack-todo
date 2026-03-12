import { create } from "zustand";
import type { IAuthUser } from "../utils/types";

interface IProps {
  authUser: IAuthUser | null;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  setAuthUser: (user: IAuthUser | null) => void;
}

export const useAuthStore = create<IProps>((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,

  setAuthUser: (user) => set({ authUser: user }),
}));
