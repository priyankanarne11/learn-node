const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://priyachowdary1978:Q1lfolWzRzmH7xpV@nodecluster.cjgxzq4.mongodb.net/dev-tinder"
  );
};

connectDB().then(() => {
  console.log("Database Connected");
});

module.exports = connectDB;
