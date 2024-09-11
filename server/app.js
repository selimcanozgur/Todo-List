import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import todoRouter from "./routes/todoRoute.js";

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/todos", todoRouter);

export default app;
