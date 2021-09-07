import { useState } from "react";

function AddTask(props) {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Write your new task here"
        size="30"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addTask(input);
          setInput("");
        }}>
        Add Task
      </button>
    </>
  );
}

export default AddTask;
