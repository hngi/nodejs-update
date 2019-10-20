const multerHelper = require('../middleware/multer');
const dataUri = multerHelper.dataUri;
const { uploader, cloudinaryConfig } = require('../config/cloudinary');
const upload = (req, res, next) => {
  if (req.file) {
    const file = dataUri(req).content;
    return uploader
      .upload(file)
      .then(result => {
        const fileUploadedUrl = result.url;
        res.locals['cloudinaryUrl'] = fileUploadedUrl;
        next();
      })
      .catch(err => {
        res.json({
          message: 'Something went wrong while processing your request',
          success: false,
          data: {
            err
          }
        });
      });
  }
  else{
return;
  }
};
module.exports = upload;
