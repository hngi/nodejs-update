const express = require("express");
const { shortenLink, getShortenLink } = require("../controller/urlshorten");
const router = express.Router();

const uploadFile = require("../controller/upload");
const mutter = require("../middleware/uploads");
const auth = require("../middleware/auth");

router.post("/upload", auth, mutter, uploadFile);
router.get("/shorten/:code", auth, getShortenLink);
router.post("/shorten", auth, shortenLink);

module.exports = router;
