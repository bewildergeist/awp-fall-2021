const mongoose = require("mongoose");

// Use the "recipes" database
mongoose.connect("mongodb://localhost/recipes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function doStuff() {
  const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: [String],
  });

  const RecipeModel = mongoose.model("Recipe", recipeSchema);

  // Part 1: Create a document
  let pizza = new RecipeModel({
    title: "Pizza",
    description: "This is pizza",
    ingredients: ["tomato", "cheese", "onion"],
  });
  console.log("pizza", pizza);
  try {
    const savedPizza = await pizza.save();
    console.log("savedPizza", savedPizza);
  } catch (error) {
    console.error(error);
  }

  // Part 2: Searching for a document
  pizza = await RecipeModel.findOne({ title: "Pizza" });
  console.log("findOne pizza", pizza);

  // Part 3: Update a pizza?
  // 1. Find document
  // 2. Make changes to the document
  // 3. Save it again
  const pizzaToUpdate = await RecipeModel.findOne({ title: "Pizza" });
  pizzaToUpdate.title = "Some other pizza";
  pizzaToUpdate.description = "Another type of pizza";
  await pizzaToUpdate.save();
  console.log("pizzaToUpdate", pizzaToUpdate);

  // Part 4: Find all pizzas
  let pizzaArray = await RecipeModel.find();
  console.log("pizzaArray", pizzaArray);

  // Part 5: Delete some pizzas
  await RecipeModel.deleteMany({ title: "Pizza" });
}

doStuff().then(() => {
  mongoose.disconnect();
});
