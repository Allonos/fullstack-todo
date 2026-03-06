export type Priority = "Low" | "Medium" | "High";

export const priorityOptions: {
  value: Priority;
  label: string;
  color: string;
  bg: string;
}[] = [
  {
    value: "Low",
    label: "Low",
    color: "text-green-600",
    bg: "bg-green-100 border-green-200",
  },
  {
    value: "Medium",
    label: "Medium",
    color: "text-amber-600",
    bg: "bg-amber-100 border-amber-200",
  },
  {
    value: "High",
    label: "High",
    color: "text-red-600",
    bg: "bg-red-200 border-red-300",
  },
];
