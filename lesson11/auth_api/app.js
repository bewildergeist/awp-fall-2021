/*
 * Disclaimer:
 * This app demonstrates how to make an authenticated API with password protected users.
 * This app DOES NOT demonstrate best practices but only how to use the individual libraries.
 * Use the code below at your own discretion. Read the comments!
 */

// Libraries
import express from "express";
import morgan from "morgan";
import cors from "cors";
import checkJwt from "express-jwt"; // Validates access tokens automatically

import createUsersRouter from "./routers/usersRouter.js";
import createKittenRouter from "./routers/kittenRouter.js";

// Configuration
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON from the request body
app.use(morgan("combined")); // Log all requests to the console

// Open paths that do not need login.
// You can use various formats to define the open paths.
const openPaths = [
  // Open "/api/users/authenticate" for POST requests
  { url: "/api/users/authenticate", methods: ["POST"] },

  // Open everything that doesn't begin with "/api"
  /^(?!\/api).*/gim,

  // Open all GET requests on the form "/api/questions/*" using a regular expression
  { url: /\/api\/questions\.*/gim, methods: ["GET"] },
];

// The secret value. Defaults to "the cake is a lie".
const secret = process.env.SECRET || "the cake is a lie";

// Validate the user token using checkJwt middleware.
app.use(
  checkJwt({ secret, algorithms: ["HS512"] }).unless({ path: openPaths })
);

// This middleware checks the result of checkJwt above
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    // If the user didn't authorize correctly
    res.status(401).json({ error: err.message }); // Return 401 with error message.
  } else {
    next(); // If no errors, forward request to next middleware or route handler
  }
});

// Some test data
const data = [
  { id: 1, name: "Garfield", hobbies: ["Purring", "Sleeping", "Eating"] },
  { id: 2, name: "Tom", hobbies: ["Purring", "Eating"] },
  { id: 3, name: "Felix", hobbies: ["Sleeping", "Eating"] },
];

// The routes
const usersRouter = createUsersRouter(secret);
const kittenRouter = createKittenRouter(data);
app.use("/api/users", usersRouter);
app.use("/api/kittens", kittenRouter);

// Start
app.listen(port, () =>
  console.log(`Auth Kittens API running on port ${port}!`)
);
