const express = require("express");
const router = express.Router();

const loginUser = require("../controller/Login");
const registerUser = require("../controller/Register");

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
