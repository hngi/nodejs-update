const multer = require("multer");
const multerS3 = require("multer-s3");
const { s3Config } = require("../config/aws3");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const fileFilter = (req, file, cb) => {
  let extname = file.originalname
    .toLowerCase()
    .match(
      /.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|xlsx|avi|flv|mkv|xml|exe|zip)$/
    );
  let mimetype = file.mimetype.match(
    /.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|xlsx|avi|flv|mkv|xml|exe|zip)$/
  );
  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};

const multerUploads = multer({
  storage: multerS3({
    s3: s3Config,
    acl: "public-read",
    bucket: "hngi-nodejs-update",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  })
}).array("file", 4);

module.exports = multerUploads;
