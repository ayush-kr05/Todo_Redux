import express from "express";
import Todo from "../models/todo.model.js";

const TodoRouter = express.Router();

TodoRouter.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newTodo = await Todo.create(data);

    res.send({ message: "Todo Added Succesfully" });
  } catch (error) {
    console.log(error.message);
  }
});

TodoRouter.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    console.log(error.message);
  }
});

TodoRouter.get("/:Id", async (req, res) => {
  const id = req.params.Id;
  try {
    const todo = await Todo.findById(id);
    res.send(todo);
  } catch (error) {
    console.log(error.message);
  }
});

TodoRouter.delete("/:Id", async (req, res) => {
  const id = req.params.Id;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    // console.log(deletedTodo);
    res.send({ message: "Todo Deleted Succesfully" });
  } catch (error) {
    console.log(error.message);
  }
});

export default TodoRouter;
