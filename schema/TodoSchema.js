import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      require: [false, "Please enter todo"],
    },
    isDone: {
      type: Boolean,
      require: [false]
    }
  },
  {
    timestamps: true,
  }
);

 const Todo = mongoose.model("Todo", TodoSchema);
export  default Todo