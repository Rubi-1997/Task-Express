const express = require("express");
let todo = require("./todo.json");
const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.status(200).json({
    suuccess: true,
    data: todo
  });
});
app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  let num = id.slice(1);
  let num2 = Number(num);
  const todo_task = todo.find((ele) => ele.id === num2);
  console.log(todo_task);
  if (!todo_task) {
    return res.status(404).json({
      success: false,
      message: "task not found",
    });
  }

  res.status(200).json({
    success: true,
    data: todo_task,
  });
});

app.post("/todos", (req, res) => {
  let newItem = {
    userId: 1,
    id: todo.length + 1,
    ...req.body,
    title: todo,
    ...req.body,
    completed: todo,
    ...req.body,
  };

  todo.push(newItem);

  res.status(201).json({
    success: true,
    data: todo,
  });
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  /* slice use for id change  :1  into 1*/
  let num = id.slice(1);
  let num2 = Number(num);
  console.log(data);
  const userTodo = todo.find((ele) => ele.id === num2);
  if (!userTodo) {
    res.status(404).json({
      success: true,
      message: "user not found",
    });
  }

   todo = todo.map((ele) => {
    if (ele.id === num2) {
      return { ...ele, ...data };
    }

    return ele;
  });
  res.status(200).json({
    success: true,
    data: todo
    // message:"updated user successfully"
  });
});
app.delete("/todos/:id", (req, res) => {
  const {id} =req.params;
 let num = id.slice(1);
  let num2 = Number(num);
  console.log(id);
  const userTodo = todo.find((ele) => ele.id === num2);
  if (!userTodo) {
    return res.status(404).json({
      success:false,
      message: "user not found",
    });
  }

   todo = todo.filter((ele) => ele.id !== num2);

  res.status(200).json({
    success: true,
    data:todo,
    // message:"updated user successfully"
  });
});

const port = 3000;

app.listen(port, () => {
  console.log("server has been runned");
});
