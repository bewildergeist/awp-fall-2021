function Recipe(props) {
  const { id, getRecipe } = props;
  const recipe = getRecipe(id);

  // Conditional rendering
  if (recipe === undefined) {
    return <p>Nothing here</p>;
  } else
    return (
      <div className="recipe">
        <h3>{recipe.title}</h3>

        <p>
          Difficulty: {recipe.cookingTime > 25 ? "Hard" : "Easy"}. Preparation
          time: {recipe.cookingTime} minutes.
        </p>

        {/* Conditionally render description if set */}
        {recipe.description ? (
          <p>{recipe.description}</p>
        ) : (
          <p>(No description provided)</p>
        )}

        <div className="ingredients">
          <h4>To cook it, you'll need:</h4>

          <ul>
            {recipe.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>;
            })}
          </ul>
        </div>
      </div>
    );
}

export default Recipe;
