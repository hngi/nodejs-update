const express = require("express");
const router = express.Router();

const loginUser = require("../controller/login");
const registerUser = require("../controller/register");

router.post("/login", loginUser);
router.post("/signup", registerUser);

module.exports = router;
