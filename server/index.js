const express = require('express');
const app = express();
const cors = require('cors');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./database/db');
const router = require('./routes');
var daorouter = require('./routes/daorouter');


const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var Router = express.Router();

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


// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

 
// use express router
app.use('/api',Router);

//call dao routing
daorouter(Router);

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
