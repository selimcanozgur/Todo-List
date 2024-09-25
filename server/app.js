import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRouter from "./routes/todoRoute.js";
import connection from "./server.js";

dotenv.config({ path: "./config/.env" });

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/v1/todos", todoRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is listening to port: ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});

export default app;
