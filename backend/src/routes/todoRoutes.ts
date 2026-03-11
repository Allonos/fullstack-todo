import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../controllers/todoControllers";
import { protectRoute } from "../middleware/authMiddleware";

const router = Router();

router.use(protectRoute);

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.put("/update/:id", updateTodo);

router.post("/create", createTodo);

router.delete("/delete/:id", deleteTodo);

export default router;
