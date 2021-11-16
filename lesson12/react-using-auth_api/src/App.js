import { useState, useEffect } from "react";
import apiService from "./apiService";

import Login from "./Login";

function App() {
  const [kittens, setKittens] = useState([]);
  const [postCount, setPostCount] = useState(0);

  // Getting data from API
  useEffect(() => {
    async function getData() {
      // We now use `apiService.fetch()` instead of `fetch()`
      const response = await apiService.fetch("/kittens");
      const data = await response.json();
      setKittens(data);
    }
    getData();
  }, [postCount]); // Refresh data whenever postCount is increased

  // Login using API
  async function login(username, password) {
    try {
      const resp = await apiService.login(username, password);
      console.log("Authentication:", resp.msg);
      setPostCount((p) => p + 1);
    } catch (e) {
      console.log("Login", e);
    }
  }

  /*
  useEffect(() => {
    if (!apiService.loggedIn()) {
      login("krdo", "123").then(() => {
        setPostCount(p => p + 1); // Refresh data after login
      })
    }
  }, []); // Only try login at first page render
  */

  let contents = <p>No kittens!</p>;
  if (kittens.length > 0) {
    contents = (
      <ol>
        {kittens.map((kitten) => (
          <li key={kitten.id}>{kitten.name}</li>
        ))}
      </ol>
    );
  }

  let loginPart = <Login login={login}></Login>;
  if (apiService.loggedIn()) {
    loginPart = "Logged in!";
  }

  return (
    <>
      <h1>Kittens</h1>
      {contents}
      {loginPart}
    </>
  );
}

export default App;
