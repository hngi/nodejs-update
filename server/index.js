const express = require("express");
const app = express();
const cors = require("cors");
var fileUpload = require("express-fileupload");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
require("./database/db");
const router = require("./routes/index");

app.use(cors());
app.use(expressValidator());
app.use(express.json({ extended: false }));
app.use(
  fileUpload({
    createParentPath: true
  })
);

app.use("/api/v1", router);
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", router);

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
