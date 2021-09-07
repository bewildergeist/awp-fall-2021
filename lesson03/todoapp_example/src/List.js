import Task from "./Task";

function List(props) {
  const items = props.todoList.map((element, index) => (
    <li key={index}>
      <Task task={element} index={index} changeDone={props.changeDone} />
    </li>
  ));

  return <ol>{items}</ol>;
}

export default List;
