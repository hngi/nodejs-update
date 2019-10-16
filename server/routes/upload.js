const express = require("express");
const router = express.Router();

const uploadFile = require("../controller/upload");
const mutter = require("../middleware/uploads");

router.post("/upload", mutter, uploadFile);

module.exports = router;
