export interface IAuthUser {
  _id: string;
  fullName: string;
  email: string;
}

export interface ITodo {
  completed: boolean;
  createdAt: string;
  description: string | undefined;
  priority: "Low" | "Medium" | "High";
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}
