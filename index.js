const express = require("express");
let todo = require("./todo.json");
const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  res.status(200).json({
    suuccess: true,
    data: todo,
  });
});
app.get("/todos/:id", (req, res) => {
  const {id} = req.params;
  let num=id.slice(1)
  let num2=Number(num);
  const todo_task = todo.find((ele) => ele.id ===num2);
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
    id: 9,
    title: "illo expedita consequatur quia in",
    completed: false,
  };
  todo = [...todo, newItem];
  //   todo.push(newItem)

  res.status(201).json({
    success: true,
    data: todo,
  });
});

const port = 3000;

app.listen(port, () => {
  console.log("server has been runned");
});
