// const multerHelper = require("../middleware/uploads");
// const fileUpload = multerHelper.fileUpload;
const fs = require("fs");
const { v2 } = require("../config/cloudinary");
const upload = (req, res, next) => {
  let uploadedFile = {
    fileName: req.files[0].path
  };
  console.log(req.files[0].path);

  if (req.files) {
    return v2.uploader
      .upload(uploadedFile.fileName, {
        resource_type: "auto"
      })
      .then(result => {
        console.log("upload.js ", result);

        const fileUploadedUrl = result.url;
        let originalName = req.files.originalname;
        res.locals["originalName"] = originalName;
        res.locals["cloudinaryUrl"] = fileUploadedUrl;
        fs.unlinkSync(uploadedFile.fileName);
        next();
      })
      .catch(err => {
        console.log("upload.js fail", err);

        res.status(400).json({
          message: "Something went wrong while processing your request",
          success: false,
          data: {
            err
          }
        });
      });
  } else {
    console.log(false);
  }
};
module.exports = { upload };
