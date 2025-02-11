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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
