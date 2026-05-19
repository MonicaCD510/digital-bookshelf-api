// dependencies
const express = require("express");
const Book = require("../models/Book");

// router configuration
const router = express.Router();

// create a new book
router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);

    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();

    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get one book by id
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// export router
module.exports = router;