import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./lib/db";
import todoRoutes from "./routes/todoRoutes";
import authRoutes from "./routes/authRoutes";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 8080;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

const app = express();
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/todos", todoRoutes);
app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
