express = require("express");

const app = express();

// ordering of these routes is important
// if you use app.use() and if the route matches then it
// will not go to the next route even though you expect it
// to match based on http method
// in app.use(), the callback is called route handler
// app.use() matches any http method

// Syntax: app.use(route, routeHandler)
// there can be multiple route handlers for a single route
app.use("/test1", (req, res) => {
  res.send("Hello World");
});

// only 1st route handler executes. because of res.send() in 1st route handler
// 2nd route handler is not executed
app.use(
  "/test2",
  (req, res) => {
    res.send("Hello World");
  },
  (req, res) => {
    res.send("This is the second route handler");
  }
);

// only 1st route handler executes.
// 2nd route handler is not executed
// we are not telling to go to next route handler here
app.use(
  "/test3",
  (req, res) => {
    console.log("Hello World");
  },
  (req, res) => {
    console.log("This is the second route handler");
  }
);

// using next() we are telling to go to next route handler
app.use(
  "/test4",
  (req, res, next) => {
    console.log("Hello World");
    next();
  },
  (req, res) => {
    console.log("This is the second route handler");
  }
);

// this throws an error. because route handler 1 has already sent a response
// and route handler 2 is trying to send a response again, that is why we get error

// route handler 2 gets executed, but due to res.send() in route handler2, we are getting error
app.use(
  "/test5",
  (req, res, next) => {
    console.log("Hello World");
    res.send("hiii");
    next();
  },
  (req, res) => {
    console.log("This is the second route handler");
    res.send("This is the second route handler");
  }
);

// throws error because route handler 2 has already sent a response
// before res.send() in route handler1 gets executed
app.use(
  "/test6",
  (req, res, next) => {
    console.log("Hello World");
    next();
    res.send("hiii");
  },
  (req, res) => {
    console.log("This is the second route handler");
    res.send("This is the second route handler");
  }
);

// this works same as running route handlers without array
// wrapping route handlers inside an array doesn't make any difference
app.use(
  "/test7",
  [
    (req, res, next) => {
      console.log("Hello World");
      next();
    },
    (req, res, next) => {
      console.log("This is the second route handler");
      next();
    },
  ],
  (req, res) => {
    console.log("This is the third route handler");
    res.send("This is the third route handler");
  }
);

module.exports = app;
