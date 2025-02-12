express = require("express");

const app = express();

//check if the user is authenticated and authorized
// logic of checking if the user is authorized

// this middleware will only we called for /admin
app.use("/admin", (req, res, next) => {
  const isAutherized = true;
  if (!isAutherized) {
    res.status(401).send({ msg: "Unauthorized" });
  } else {
    console.log("in admin middleware");
    next();
  }
});

module.exports = app;
