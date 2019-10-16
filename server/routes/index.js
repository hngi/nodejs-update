const express = require("express");
const router = express.Router();

const loginUser = require("../controller/Login");
const registerUser = require("../controller/Register");
const convertLink = require("../controller/convertToLink");
const uploads = require("../middleware/uploads");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/upload", uploads, convertLink);

module.exports = router;
