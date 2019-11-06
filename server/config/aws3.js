// const { config, v2 } = require("cloudinary");
// const dotenv = require("dotenv");

// dotenv.config();
// const cloudinaryConfig = (req, res, next) => {
//   config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
//   });
//   next();
// };

// module.exports = { cloudinaryConfig, v2 };

const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

const s3Config = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  Bucket: process.env.AWS_BUCKET,
  region: "us-west-2	"
});

module.exports = { s3Config };
