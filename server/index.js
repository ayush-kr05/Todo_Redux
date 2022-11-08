import express from "express";
import connection from "./configs/database.js";
import cors from "cors";
import TodoRouter from "./controllers/todo.controller.js";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/todo", TodoRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const port = process.env.PORT || 8080;
app.listen(port, async () => {
  try {
    console.log(`Server running on port ${port}`);
    await connection;
  } catch (error) {
    console.log(error.message);
  }
});
