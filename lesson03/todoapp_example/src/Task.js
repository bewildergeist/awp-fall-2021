function Task(props) {
  return (
    <>
      <input
        id={props.index}
        onChange={() => props.changeDone(props.index)}
        type="checkbox"
        defaultChecked={props.task.done}
      />
      <label htmlFor={props.index}>{props.task.text}</label>
    </>
  );
}

export default Task;
