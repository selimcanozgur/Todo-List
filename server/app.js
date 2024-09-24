import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import todoRouter from "./routes/todoRoute.js";
import path from "path";
import { fileURLToPath } from "url";

// __dirname ve __filename tanımlama
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/v1/todos", todoRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

export default app;
