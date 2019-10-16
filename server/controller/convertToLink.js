const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET
});

const convertToLink = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ msg: "No File Uploaded" });
    }
    const file = req.files;
    const upload = await cloudinary.uploader.upload(req.files.tempFilePath);
    if (upload.url) {
      console.log(upload);
      res.send(upload);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = convertToLink;
