import mongoose from "mongoose";

const connection = mongoose
  .connect(`mongodb://127.0.0.1:27017/todo-app`)
  .then(() => console.log("Connected to MongoDB"));

export default connection;
