const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

const data = [
  { id: 1, title: "Pizza 1", description: "Pizza is nice 1" },
  { id: 2, title: "Pizza 2", description: "Pizza is nice 2" },
  { id: 3, title: "Pizza 3", description: "Pizza is nice 3" },
];
let nextId = 4;

app.get("/api/cooking", (req, res) => {
  res.json(data);
});

app.post("/api/cooking", (req, res) => {
  const newRecipe = {
    id: nextId,
    title: req.body.title,
    description: req.body.desc,
    ingredients: req.body.ingredients,
  };

  nextId++;
  data.push(newRecipe);
  res.json(newRecipe);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
