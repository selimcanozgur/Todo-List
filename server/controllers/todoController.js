import Todo from "../model/todoModel.js";

// Create Todo
export const createTodo = async (req, res) => {
  try {
    const data = {
      description: req.body.description,
      check: req.body.check,
    };
    const newTodo = await Todo.create(data);
    res.status(201).json({
      status: "success",
      newTodo,
    });
  } catch (err) {
    console.log(err);
  }
};
