const express = require("express");
const app = express();
<<<<<<< HEAD
const cors = require("cors");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
require("./database/db");
const router = require("./routes/index");
const uploadRoute = require("./routes/upload");
=======
const cors = require('cors');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
require('./database/db');
require('./models/ShortenLink');
require("./routes/urlshorten")(app);
const router = require('./routes');
const router = require('./routes/index');
const uploadRoute = require('./routes/upload');
>>>>>>> upstream/develop

// cloudinary import
const { urlencoded, json } = require("body-parser");
const { resolve } = require("path");
const multerUploads = require("./middleware/uploads");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(expressValidator());
app.use(express.json({ extended: false }));
app.use(
  fileUpload({
    useTempFiles: true
  })
);
app.use("/api/auth", router);
app.use("/api/user", uploadRoute);

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
