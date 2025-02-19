const express = require("express");
const app = express();
const User = require("../models/user");

app.post("/signup", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    // Validate input
    if (!name || !email || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new user
    const newUser = new User({ name, email, age });
    await newUser.save();

    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding user", error: error.message });
  }
});

app.get("/user", async (req, res) => {
  const user_email = req.body.email;
  console.log(user_email);
  try {
    const user_data = await User.find().toArray();
    console.log(user_data);
    res
      .status(200)
      .json({ message: "User found successfully", data: user_data });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting user", error: error.message });
  }
});

module.exports = app;
