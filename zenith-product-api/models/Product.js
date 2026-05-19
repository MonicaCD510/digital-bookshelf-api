// dependencies
const mongoose = require("mongoose");

// product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
    min: 0.01,
  },

  category: {
    type: String,
    required: true,
  },

  inStock: {
    type: Boolean,
    default: true,
  },

  tags: [String],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// product model
const Product = mongoose.model("Product", productSchema);

// export model
module.exports = Product;