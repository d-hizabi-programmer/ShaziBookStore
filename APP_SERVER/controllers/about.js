const res = require("express/lib/response");

module.exports.ctrlAbout = function (req, res) {
  res.render("about", { title: "ABOUT SHAZI'S BOOK STORE" });
};
