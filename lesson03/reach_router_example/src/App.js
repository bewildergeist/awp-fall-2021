import { Router } from "@reach/router";

import "./App.css";

import FruitList from "./FruitList";
import About from "./About";
import Nav from "./Nav";
import ShowStuff from "./ShowStuff";

function App(props) {
  return (
    <div className="box background-yellow">
      <h1>App.js</h1>
      <Nav /> {/* <Nav> is always rendered */}
      <Router>
        <FruitList path="/"></FruitList>
        <About path="/about"></About>

        {/* ':name' will turn into 'props.name' inside the component */}
        {/* Browser address bar will show: http://localhost:3000/stuff/some-name */}
        <ShowStuff path="/stuff/:name"></ShowStuff>
      </Router>
    </div>
  );
}

export default App;
