const cloudinary = require("cloudinary").v2;

const convertToLink = async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({ msg: "No File Uploaded" });
    }
    await cloudinary.uploader.upload(req.files, function(error, image) {
      if (error) {
        console.log(error);
      }
      console.log(image);
    });
  } catch (error) {
    console.log(error);
  }
};
