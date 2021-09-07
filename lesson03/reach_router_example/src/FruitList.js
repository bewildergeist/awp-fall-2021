import { Link } from "@reach/router";

function FruitList(props) {
  return (
    <div className="box background-blue">
      <h1>FruitList.js</h1>
      <ul>
        {["apples", "bananas", "oranges"].map((fruit) => (
          <li>
            <Link to={`/stuff/${fruit}`}>{fruit}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
