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
    const file = req.files.file;

    cloudinary.uploader
      .upload(file.tempFilePath, { public_id: file.name })
      .then(result => {
        const fileUploadedUrl = result.url;
        return res.status(200).json({
          messge: "Your File has been uploded successfully!",
          result
        });
      })
      .catch(err =>
        res.status(500).json({
          messge: "someting went wrong while processing your request",
          err
        })
      );
  } catch (error) {
    console.log(error);
    res.status(500).json("Server Error");
  }
};

module.exports = convertToLink;
