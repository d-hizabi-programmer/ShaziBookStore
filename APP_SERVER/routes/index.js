var express = require("express");
var router = express.Router();

// index
const ctrlIndex = require("../controllers/about");
router.get("/", ctrlIndex.ctrlIndex);

// About Cotroller
const ctrlAbout = require("../controllers/about");
router.get("/about", ctrlAbout.ctrlAbout);

//display-list controller
const ctrlList = require("../controllers/about");
router.get("/list", ctrlList.ctrlListDisplay);

//display controller
const ctrlDisplay = require("../controllers/about");
router.get("/display", ctrlDisplay.ctrlDisplay);

module.exports = router;
