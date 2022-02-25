const mongoose = require("mongoose");
const Book = mongoose.model("Book");

const getBooks = function (req, res) {
  Book.find().exec(function (err, bookdata) {
    if (err) {
      res.status(404).json(err);
      return;
    }
  });
  res.status(200).json({ bookdata });
};

const createBook = function (req, res) {
  Book.create(
    {
      bookName: req.body.bookName,
      bookAuthor: req.body.bookAuthor,
      bookPrice: req.body.bookPrice,
      bookGenre: req.body.bookGenre,
      bookDescription: req.body.bookDescription,
      publishDate: req.body.publishDate,
      totalPages: req.body.totalPages,
    },
    (err, fooddata) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(201).json(bookdata);
      }
    }
  );
  // res.status(200).json({ Status: "Success" });
};

const getSingleBook = function (req, res) {
  if (req.params && req.params.bookid) {
    Book.findById(req.params.bookid).exec((err, book) => {
      if (!book) {
        res.status(404).json("Book Id not found!");
      } else if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(200).json(book);
    });
  } else {
    res.status(404).json({ message: "NO BOOK ID IN REQUEST!" });
  }
  // res.status(200).json({ Status: "Success" });
};

const updateBook = function (req, res) {
  // res.status(200).json({ Status: "Success" });
  if (!req.params.bookid) {
    res.status(404).json({
      message: "Not found, bookid is required",
    });
    return;
  }
  Food.findById(req.params.bookid).exec((err, bookdata) => {
    if (!bookdata) {
      res.status(404).json({ message: "bookid not found" });
      return;
    } else if (err) {
      res.status(400).json(err);
      return;
    }
    (bookdata.bookName = req.body.bookName),
      (bookdata.bookAuthor = req.body.bookAuthor),
      (bookdata.bookPrice = req.body.bookPrice),
      (bookdata.bookGenre = req.body.bookGenre),
      (bookdata.bookDescription = req.body.bookDescription),
      (bookdata.publishDate = req.body.publishDate),
      (bookdata.totalPages = req.body.totalPages),
      // fooddata.name = req.body.name;
      // fooddata.type = req.body.type;
      bookdata.save((err, bookdata) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.status(200).json(bookdata);
        }
      });
  });
};

const deleteBook = function (req, res) {
  const bookid = req.params.bookid;
  if (bookid) {
    Book.findByIdAndRemove(bookid).exec((err, bookdata) => {
      if (err) {
        res.status(404).json(err);
        return;
      }
      res.status(204).json(null);
    });
  } else {
    res.status(404).json({ message: "No bookid" });
  }
  // res.status(200).json({ Status: "Success" });
};

module.exports = {
  getBooks,
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
