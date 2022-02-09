const mongoose = require("mongoose");

const authorInfo = new mongoose.Schema({
  authorName: { type: String, required: true },
  authorPenName: { type: String },
  aboutAuthor: { type: String, min: 20 },
});

const bookSchema = new mongoose.Schema({
  bookName: { type: String, required: true },
  bookAuthor: [authorInfo],
  bookPrice: { type: Number, required: true },
  bookGenre: { type: String, required: true },
  bookDescription: { type: String, required: true, min: 20 },
  publishDate: { type: Date, required: true },
  totalPages: { type: Number, required: true },
});
mongoose.model("Book", bookSchema);
