// dependencies
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connection");
const productRoutes = require("./routes/productRoutes");

// app configuration
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// database connection
connectDB();

// routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Zenith Product API");
});

// port listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});