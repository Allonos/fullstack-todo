import { Request, Response } from "express";
import Todo from "../models/Todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const { filter } = req.query;
    let query = {};
    if (filter === "active") query = { completed: false };
    else if (filter === "completed") query = { completed: true };

    const todos = await Todo.find(query);
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error in getTodos:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTodoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error("Error in getTodoById:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, priority } = req.body;

  if (title !== undefined && title.trim() === "") {
    return res.status(400).json({ message: "Title cannot be empty" });
  }

  const validPriorities = ["Low", "Medium", "High"];
  if (priority !== undefined && !validPriorities.includes(priority)) {
    return res
      .status(400)
      .json({ message: "Priority must be Low, Medium, or High" });
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error("Error in updateTodo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const { title, description, priority } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }

  const validPriorities = ["Low", "Medium", "High"];
  if (!priority || !validPriorities.includes(priority)) {
    return res
      .status(400)
      .json({ message: "Priority must be Low, Medium, or High" });
  }

  try {
    const newTodo = new Todo({
      title,
      description,
      priority,
    });

    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error in createTodo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTodo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
