const express = require("express");
const cors = require("cors");

const app = express();
const port = 8081;

app.use(express.json());

// Why would you need this?
// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use(cors());

app.get("/api/", (req, res) => {
  res.json({ msg: "Hello, World!" });
});

app.get("/api/data/:name", (request, response) => {
  // The name comes from the route above
  const { name } = request.params;
  response.json({ msg: `You sent me ${name}` });
});

app.post("/api/data", (request, response) => {
  // `fruit` is being sent as JSON in the body
  const { fruit } = request.body;
  response.json({ msg: `You sent me ${fruit}` });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
