const multer = require("multer");
const fs = require("fs");
const path = require("path");

//const Datauri = require("datauri");
// Start of Multer //

// Storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + " - " + file.originalname);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  let extname = file.originalname
    .toLowerCase()
    .match(
      /.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|xlsx|avi|flv|mkv|xml|exe)$/
    );
  let mimetype = file.mimetype.match(
    /.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|xlsx|avi|flv|mkv|xml|exe)$/
  );
  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

const multerUpload = multer({ storage, fileFilter: fileFilter });
const fileUpload = multerUpload.array("files", 2);

// const dataUri = new Datauri();
// const uploads = "../uploads/2019-10-27T10:31:47.766Z - stackoverflow-1.png";
// fs.readFile(uploads, (err, data) => {
//   if (err) throw err;

//   dataUri.on("encoded", content => console.log(content));
//   dataUri.on("error", error => console.error(error));
//   dataUri.encode(data);
//   console.log(dataUri.content);
// });

module.exports = { fileUpload };
