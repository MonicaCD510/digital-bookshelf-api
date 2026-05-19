// dependencies
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

// app configuration
const app = express();
const PORT = process.env.PORT || 3000;

// view engine
app.set("view engine", "ejs");

// connect to database
connectDB();

// middleware
app.use(express.json());

// landing page route
app.get("/", (req, res) => {
  res.render("index");
});

// routes
app.use("/api/books", bookRoutes);

// server listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});