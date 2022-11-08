import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: Boolean,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Todo = mongoose.model("todo", todoSchema);

export default Todo;
