const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
require('./database/db');
const router = require('./routes');
const uploadRoute = require('./routes/upload');
import {someCronJob} from "./cron";

// cloudinary import
const { urlencoded, json } = require('body-parser');
const { resolve } = require('path');
const { uploader, cloudinaryConfig } = require('./config/cloudinary');
const { multerUploads } = require('./middleware/multer');
app.use('*', cloudinaryConfig);

app.use(cors());
app.use(expressValidator());
app.use(
  express.json({
    extended: false
  })
);
app.use('/uploads', express.static('uploads'));

app.use(router);
app.use('/api/upload', multerUploads, uploadRoute);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

//starts cronjob
someCronJob.start();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
