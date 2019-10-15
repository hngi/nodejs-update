const express = require("express");
const loginUser = require("../controller/login");
const router = express.Router();

const fileUpload = require("../middleware/uploads");

router.post("/login", loginUser);

router.post("/upload", fileUpload, (req, res) => {
  //console.log(req.file);
  if (req.file.path) {
    res.json({
      message: req.file
    });
    return;
  }
  res.json({
    error: "Not uploading"
  });
});

module.exports = router;
