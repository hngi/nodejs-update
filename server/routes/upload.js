const express = require("express");
const router = express.Router();

const uploadFile = require("../controller/upload");

router.post("/", uploadFile.upload);

module.exports = router;
