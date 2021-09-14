import { Link } from "@reach/router";
import AddRecipe from "./AddRecipe";

function Recipes(props) {
  let recipesToShow = props.recipes;
  const isFilteredByIngredient = Boolean(props.ingredient);

  // If we're in a route that filters by :ingredient, be sure to filter the shown recipes
  if (isFilteredByIngredient) {
    recipesToShow = props.recipes.filter((recipe) =>
      recipe.ingredients.includes(props.ingredient)
    );
  }

  const totalPreparationTime = recipesToShow.reduce(
    (accumulator, currentValue) => {
      accumulator += currentValue.cookingTime;
      return accumulator;
    },
    0
  );

  return (
    <div>
      {isFilteredByIngredient ? (
        <h3>Recipes with: {props.ingredient}</h3>
      ) : (
        <h3>All recipes</h3>
      )}

      <ol className="recipes-list">
        {recipesToShow.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ol>

      <p>{totalPreparationTime} minutes of preparation time in total.</p>

      {/* Do not show the AddRecipe component if we're on a filtered view */}
      {isFilteredByIngredient ? null : (
        <AddRecipe addRecipe={props.addRecipe} />
      )}
    </div>
  );
}

export default Recipes;
