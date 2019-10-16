<<<<<<< HEAD
const { config, uploader } = require("cloudinary");
const dotenv = require("dotenv");
=======
const { config, uploader } = require('cloudinary');
const dotenv = require('dotenv');
>>>>>>> upstream/develop

dotenv.config();
const { CLOUD_NAME, CLOUD_KEY, API_SECRET } = process.env;
const cloudinaryConfig = (req, res, next) => {
  config({
<<<<<<< HEAD
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: API_SECRET
=======
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
>>>>>>> upstream/develop
  });
  next();
};

<<<<<<< HEAD
module.exports = { cloudinaryConfig, uploader };
=======
module.exports= { cloudinaryConfig, uploader };
>>>>>>> upstream/develop
