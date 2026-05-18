// dependencies
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");

// app configuration
const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectDB();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Digital Bookshelf API is running");
});

// server listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});