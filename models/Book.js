// dependencies
const mongoose = require("mongoose");

// schema
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  isbn: {
    type: String,
    unique: true,
  },

  publishedDate: {
    type: Date,
  },

  inStock: {
    type: Boolean,
    default: true,
  },
});

// model
const Book = mongoose.model("Book", bookSchema);

// export model
module.exports = Book;