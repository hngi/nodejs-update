const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
require('./database/db');
require('./model/ShortenLink');
require("./routes/urlshorten")(app);
const router = require('./routes');
const router = require('./routes/index');
const uploadRoute = require('./routes/upload');

// cloudinary import
import { urlencoded, json } from 'body-parser';
import { resolve } from  'path';
import { uploader, cloudinaryConfig } from './config/cloudinary'
import { multerUploads } from './middlewares/multer';
app.use('*', cloudinaryConfig);

app.use(cors());
app.use(expressValidator());
app.use(express.json({ extended: false }));
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', router);
app.use('/api/upload', multerUploads, uploadRoute);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
