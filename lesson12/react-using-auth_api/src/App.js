import { useState, useEffect } from "react";
import AuthService from "./AuthService";

import Login from "./Login";

const API_URL = "http://localhost:8080/api";

const authService = new AuthService(`${API_URL}/users/authenticate`);

function App() {
  const [kittens, setKittens] = useState([]);
  const [postCount, setPostCount] = useState(0);

  // Getting data from API
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/kittens`;
      // We now use `authService.fetch()` instead of `fetch()`
      const response = await authService.fetch(url);
      const data = await response.json();
      setKittens(data);
    }
    getData();
  }, [postCount]); // Refresh data whenever postCount is increased

  // Login using API
  async function login(username, password) {
    try {
      const resp = await authService.login(username, password);
      console.log("Authentication:", resp.msg);
      setPostCount((p) => p + 1);
    } catch (e) {
      console.log("Login", e);
    }
  }

  /*
  useEffect(() => {
    if (!authService.loggedIn()) {
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
  if (authService.loggedIn()) {
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
