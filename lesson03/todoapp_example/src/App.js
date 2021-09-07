import { useState } from "react";
import List from "./List";
import AddTask from "./AddTask";

import "./style.css";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Do laundry", done: false },
    { text: "Clean bedroom", done: true },
    { text: "Bake cake", done: true },
    { text: "Pick up groceries", done: false },
    { text: "Post letter", done: false },
  ]);

  function addTask(text) {
    const task = {
      text: text,
      done: false,
    };
    setTasks([...tasks, task]);
  }

  function changeDone(index) {
    const newTasks = [...tasks]; // Clone array
    newTasks[index] = { ...newTasks[index], done: !newTasks[index].done };
    setTasks(newTasks);
  }

  return (
    <>
      <h1>Todo List</h1>
      <List todoList={tasks} changeDone={changeDone} />
      <AddTask addTask={addTask} />
    </>
  );
}

export default App;
