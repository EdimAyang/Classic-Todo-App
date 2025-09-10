import Todo from "../schema/TodoSchema.js";


//Get Todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get specific Todos
export const getSpecificTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Add Todo
export const AddTodo = async (req, res) => {
  if (req.method != "POST" && req.path != "/api/todos") return;
  try {
    const newTodo = new Todo(req.body);
    const savedTodo = await newTodo.save();
    res.status(201).json({data:savedTodo, message:"Todo Added"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update Todo
export const UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    if (!todo) {
      return res.status(400).json("todo not found");
    }
    const updatedTodo = await Todo.findById(id);
    res.status(201).json({data:updatedTodo, message:"Todo Updated"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Todo
export const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: "todo deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
