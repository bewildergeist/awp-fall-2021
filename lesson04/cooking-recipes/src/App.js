import { useState } from "react";
import { Router, Link } from "@reach/router";

import Recipes from "./Recipes";
import Recipe from "./Recipe";

import "./style.css";

const data = [
  {
    id: 1,
    title: "Prima Pepperoni Deep Dish Pizza",
    description:
      "Pepperoni with chunky vine-ripened tomato sauce, mozzarella and pecorino romano.",
    ingredients: ["Pepperoni", "Mozarella cheese", "Pecorino romano"],
  },
  {
    id: 2,
    title: "Chicago-style hot dog",
    description:
      "Chicago-style hot dog with everything, which includes mustard, relish, celery salt, freshly chopped onions, sliced red ripe tomatoes, kosher pickle and sport peppers piled onto a perfectly steamed poppy seed bun. Chicagoans call this “dragging the dog through the garden.”",
    ingredients: [
      "Mustard",
      "Relish",
      "Celery salt",
      "Freshly chopped onions",
      "Sliced red ripe tomatoes",
      "Kosher pickle",
      "Sport peppers",
      "Vienna beef sausage",
      "Poppy seed bun",
    ],
  },
  {
    id: 3,
    title: "French Silk Pie",
    description:
      "Velvety smooth chocolate silk covered with real whipped cream and milk chocolate curls, inside an amazing pastry crust.",
    ingredients: [
      "flour",
      "butter",
      "cream",
      "chocolate pudding",
      "chocolate curls",
    ],
  },
];

function App() {
  const [recipes, setRecipes] = useState(data);

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
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  }

  return (
    <div>
      <h1 className="site-title">
        <Link to="/">🧑‍🍳 Cooking Recipes</Link>
      </h1>

      <Router>
        <Recipes path="/" data={recipes} addRecipe={addRecipe}></Recipes>
        <Recipe path="/recipe/:id" getRecipe={getRecipe}></Recipe>
      </Router>
    </div>
  );
}

export default App;
