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

module.exports = fileUpload;
// End of Multer //
