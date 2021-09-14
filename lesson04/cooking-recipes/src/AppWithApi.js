import { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

import "./style.css";

/* NB: To use this component, swap out "AppWithApi" for "App" in index.js */

// For this to work without an API key, this bin needs to be public:
const API_URL = "https://api.jsonbin.io/v3/b/6140ef234a82881d6c4f07aa";

function AppWithApi() {
  const [recipes, setRecipes] = useState([]);

  // Fetch data on app mount
  useEffect(() => {
    // Public bins on JSONbin are versioned automatically,
    // so we need to append "/latest" to always get the latest version
    fetch(`${API_URL}/latest`)
      .then((response) => response.json())
      .then((data) => setRecipes(data.record))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getRecipe(id) {
    return recipes.find((recipe) => recipe.id === parseInt(id));
  }

  function addRecipe(title, desc, ingredients) {
    const newRecipe = {
      id: recipes.length + 1,
      title: title,
      description: desc,
      ingredients: ingredients,
    };

    fetch(API_URL, {
      // PUT instead of POST because we overwrite the whole bin with a new version
      // https://jsonbin.io/api-reference/v3/bins/update
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // Simple version where we overwrite the entire "database" store with a new list
      body: JSON.stringify([...recipes, newRecipe]),
    })
      .then((response) => response.json())
      .then((data) => setRecipes(data.record))
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1 className="site-title">
        <Link to="/">🧑‍🍳 Cooking Recipes</Link>
      </h1>

      <Router>
        <Recipes path="/" recipes={recipes} addRecipe={addRecipe} />
        <Recipes
          path="/recipes/with/:ingredient"
          recipes={recipes}
          addRecipe={addRecipe}
        />
        <Recipe path="/recipe/:id" getRecipe={getRecipe} />
      </Router>
    </div>
  );
}

export default AppWithApi;
