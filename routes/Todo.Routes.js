import express from "express";
const router = express.Router();
const app = express();
app.use(express.json());

//controllers
import {
  AddTodo,
  DeleteTodo,
  getSpecificTodo,
  getTodos,
  UpdateTodo,
} from "../controller/Todo.Controller.js";

//get todos
router.get("/", getTodos);

//get specific todo
router.get("/:id", getSpecificTodo);

//add todo
router.post("/", AddTodo);

//update todo
router.put("/:id", UpdateTodo);

//delete todo
router.delete("/:id", DeleteTodo);

export default router
