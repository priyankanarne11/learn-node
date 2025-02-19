const express = require("express");
const app = express();
const connectDB = require("../config/database");
const useRoutes = require("./use");
const httpRoutes = require("./http_methods");
const dbRoutes = require("./db_ops");

// Middleware
app.use(express.json()); // Parse JSON request body

app.use(useRoutes);
app.use(httpRoutes);
app.use(dbRoutes);

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
