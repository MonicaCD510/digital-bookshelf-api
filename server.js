// dependencies
require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

// app configuration
const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectDB();

// middleware
app.use(express.json());

// routes
app.use("/api/books", bookRoutes);

// server listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});