const express = require("express");
const router = express.Router();

const uploadFile = require("../controller/upload");
const mutter = require("../middleware/uploads");
const auth = require("../middleware/auth");

router.post("/upload", auth, mutter, uploadFile);

module.exports = router;
