const express = require("express");
const app = express();
const useRoutes = require("./use");
const httpRoutes = require("./http_methods");

app.use(useRoutes);
app.use(httpRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
