const multerHelper = require("../middleware/multer");
const dataUri = multerHelper.dataUri;
const { v2, cloudinaryConfig } = require("../config/cloudinary");
const upload = (req, res, next) => {
  if (req.file) {
    const file = dataUri(req).content;
    return v2.uploader
      .upload(file, {
        resource_type: "auto"
      })
      .then(result => {
        const fileUploadedUrl = result.url;
        res.locals["cloudinaryUrl"] = fileUploadedUrl;
        next();
      })
      .catch(err => {
        res.json({
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
module.exports = upload;
