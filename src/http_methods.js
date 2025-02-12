const express = require("express");
const app = express();
const auth = require("./authorize");

app.use(auth);

//---------------------------------------------------------------

// each route handler is a middleware
app.get("/admin/get_id", (req, res) => {
  res.send({ id: "1234" });
});

//---------------------------------------------------------------

// http://localhost:3000/get_name_by_id?id=1234
// to access query parameters, we use req.query
app.get("/get_name_by_id", (req, res) => {
  console.log(req.query);
  res.send({ name: "John" });
});

//---------------------------------------------------------------

// http://localhost:3000/get_name_by_id/1234
// to access path parameters, we use req.params
app.get("/get_name_by_id/:user_id", (req, res) => {
  console.log(req.params);
  res.send({ name: "John" });
});

//---------------------------------------------------------------

// next() in below method executes the next matching request
// the route has to be same
app.get("/get_id_next", (req, res, next) => {
  console.log({ id: "1234" });
  next();
});
app.get("/get_id_next", (req, res) => {
  res.send({ name: "John" });
});

module.exports = app;
