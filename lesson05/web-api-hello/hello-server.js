import express from "express";
import cors from "cors";

const app = express();
const port = 8081;

/* The express.json() middleware automatically parses JSON data in the body of
 * requests: http://expressjs.com/en/api.html#express.json */
app.use(express.json());

/* The cors() middleware allows Cross-Origin Resource Sharing when developing
 * locally: http://expressjs.com/en/resources/middleware/cors.html */
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
