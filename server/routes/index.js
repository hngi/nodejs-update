const express = require("express");
const loginUser = require("../controller/login");
const router = express.Router();
const multer = require("multer");

// Start of Multer //

// Storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({ storage: storage });
const fileUpload = upload.single("files");

// End of Multer //

router.post("/login", loginUser);

// Test for Multer
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
