const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload');
require('./database/db');
const router = require('./routes/index');
const uploadRoute = require('./routes/upload');

// cloudinary import
const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'name',
  api_key: 'key',
  api_secret: 'secret'
});

app.use(cors());
app.use(expressValidator());
app.use(express.json({ extended: false }));
app.use(fileupload({
  useTempFiles: true
}));
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', router);
app.use('/api/upload', uploadRoute);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
