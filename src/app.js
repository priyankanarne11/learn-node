express = require("express");

const app = express();

// ordering of these routes is important
// if you use app.use() and if the route matches then it
// will not go to the next route even though you expect it
// to match based on http metho
app.use("/test", (req, res) => {
  res.send("Hello World");
});

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
