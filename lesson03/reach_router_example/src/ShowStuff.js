function ShowStuff(props) {
  return (
    <div className="box background-green">
      <h1>ShowStuff.js</h1>
      <p>Name of the stuff is: {props.name}</p>
    </div>
  );
}

export default ShowStuff;
