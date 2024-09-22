import express from "express";
import {
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.route("/").get(getAllTodo).post(createTodo);
router.route("/:id").delete(deleteTodo).put(updateTodo);

export default router;
