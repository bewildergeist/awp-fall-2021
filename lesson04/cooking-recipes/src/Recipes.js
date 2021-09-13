import { Link } from "@reach/router";
import AddRecipe from "./AddRecipe";

function Recipes(props) {
  const { data, addRecipe } = props;

  return (
    <>
      <h3>All recipes</h3>
      <ol className="recipes-list">
        {data.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ol>

      <AddRecipe addRecipe={addRecipe} />
    </>
  );
}

export default Recipes;
