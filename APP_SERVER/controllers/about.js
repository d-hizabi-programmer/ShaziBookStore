const res = require("express/lib/response");

const bookListArray = [
  {
    bookName: "War and Peace",
    bookAuther: "Leo Tolstoy",
    bookPrice: "$21.00",
    bookDescription:
      "A legendary masterpiece, this book is synonymous with difficult reading, so why not challenge yourshelf.",
    bookGenre: "Novel",
  },
  {
    bookName: "A Desolation Called Peace",
    bookAuther: "Arkady Martine",
    bookPrice: "$34.00",
    bookDescription: "An incredible book by a beloved writer is a must read.",
    bookGenre: "Sci-Fi",
  },
  {
    bookName: "If I Never Met You",
    bookAuther: "Mhairi McFarlane",
    bookPrice: "$24.74",
    bookDescription:
      "Bestselling author Mhairi McFarlane returns with another heartfelt romantic comedy perfect for fans of Josie Silver, Sophie Kinsella, or Sally Thorne. One of Shondaland's 5 Must-Read Books for March and a Best Romance of 2020 ",
    bookGenre: "Romance & Comedy",
  },
  {
    bookName: "Harry Potter",
    bookAuther: "J. K. Rowling",
    bookPrice: "$12.38",
    bookDescription:
      "Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series.",
    bookGenre: "Adventure Fiction",
  },
  {
    bookName: "A Thousands Ships",
    bookAuther: "Natalie Haynes",
    bookPrice: "$22.09",
    bookDescription:
      "Go on an adventure this year with this thrilling fantasy tale.",
    bookGenre: "Historical Fiction",
  },
];

// index page
module.exports.ctrlIndex = function (req, res) {
  res.render("index", { title: "ABOUT SHAZI'S BOOK STORE" });
};

//about page
module.exports.ctrlAbout = function (req, res) {
  res.render("about", { title: "ABOUT SHAZI'S BOOK STORE" });
};

//list-display
module.exports.ctrlListDisplay = function (req, res) {
  res.render("list-display", { bookList: bookListArray });
};

//display
module.exports.ctrlDisplay = function (req, res) {
  res.render("display");
};
