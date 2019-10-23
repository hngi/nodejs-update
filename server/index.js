const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./database/db');
const router = require('./routes');


const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});


// cloudinary import
const { urlencoded, json } = require('body-parser');
const { resolve } = require('path');
const { uploader, cloudinaryConfig } = require('./config/cloudinary');
const { multerUploads } = require('./middleware/multer');
app.use('*', cloudinaryConfig);
app.get('/', (req, res) => {
  res.send('Connected');
});
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // using custom css and js files
app.use(cors());
app.use(expressValidator());
app.use(
  express.json({
    extended: false
  })
);
app.use(router);

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);



mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
