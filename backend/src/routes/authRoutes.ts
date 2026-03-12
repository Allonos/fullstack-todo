import { Response, Router } from "express";
import { login, logout, signup } from "../controllers/authControllers";
import { AuthRequest, protectRoute } from "../middleware/authMiddleware";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/check", protectRoute, (req: AuthRequest, res: Response) =>
  res.status(200).json(req.user),
);

export default router;
