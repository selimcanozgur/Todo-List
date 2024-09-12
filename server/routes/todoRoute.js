import express from "express";
import {
  createTodo,
  getAllTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.route("/").get(getAllTodo).post(createTodo);
router.route("/:id").delete(deleteTodo);

export default router;
