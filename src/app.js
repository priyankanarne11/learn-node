const express = require("express");
const app = express();
const useRoutes = require("./use");

app.use(useRoutes);

app.get("/get_id", (req, res) => {
  res.send({ id: "1234" });
});

// http://localhost:3000/get_name_by_id?id=1234
// to access query parameters, we use req.query
app.get("/get_name_by_id", (req, res) => {
  console.log(req.query);
  res.send({ name: "John" });
});

// http://localhost:3000/get_name_by_id/1234
// to access path parameters, we use req.params
app.get("/get_name_by_id/:user_id", (req, res) => {
  console.log(req.params);
  res.send({ name: "John" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
