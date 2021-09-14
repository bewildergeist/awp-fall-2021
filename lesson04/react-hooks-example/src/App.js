import { useState, useEffect } from "react";
import ExampleButton from "./ExampleButton";
import ExampleEffect from "./ExampleEffect";

function App() {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }, []); // Only use this effect after first render

  return (
    <div className="App">
      <h2>React Hooks</h2>

      <ExampleButton />

      <ExampleEffect />

      <h3>Tasteless joke from API:</h3>
      <quote>{joke}</quote>
    </div>
  );
}

export default App;
