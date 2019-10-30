const express = require("express");
const app = express();
const cors = require("cors");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
require("./database/db");
const router = require("./routes");
// cloudinary import
const {
  urlencoded,
  json
} = require("body-parser");
const cookieParser = require('cookie-parser')
const {
  resolve
} = require("path");
//const { uploader, s3Config } = require("./config/aws3");
//const { multerUploads } = require("./middleware/multer");
//app.use("*", s3Config);
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Connected");
});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); // using custom css and js files
app.use(cors());
app.use(expressValidator());
app.use(
  express.json({
    extended: false
  })
);
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser()); //Parse the cookie data (User ID).
app.use(router);

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;