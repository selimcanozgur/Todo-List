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
      checkTodo: req.body.checkTodo,
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

// Todo Update

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTodo = await Todo.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      status: "success",
      updateTodo,
    });
  } catch (err) {
    console.log(err);
  }
};
