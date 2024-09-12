import Todo from "../model/todoModel.js";

// Todo list
export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      status: "success",
      length: todos.length,
      todos,
    });
  } catch (err) {
    console.log(err);
  }
};

// Todo Create
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

// Todo Delete
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      message: "Todo deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
