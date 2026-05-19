// dependencies
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// create product
router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// export router
module.exports = router;