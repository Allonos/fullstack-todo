import express from "express";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./lib/db";
import todoRoutes from "./routes/todoRoutes";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
