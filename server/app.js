import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRouter from "./routes/todoRoute.js";
import path from "path";
import { fileURLToPath } from "url";

// __dirname ve __filename tanımlama
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: "./config/.env" });

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.use(cors());

app.use("/api/v1/todos", todoRouter);

export default app;
