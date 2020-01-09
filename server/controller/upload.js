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

      res.locals.temp = temp;
      next();
    } else {
      res.json({
        message: 'Null'
      });
    }
  },

  del(req, res) {
    const id = req.params.id;

    temp.forEach(temp => {
      if (id !== temp.id) {
        return res.status(400).json({
          message: `File with id ${id} does not exist`
        });
      }
    });

    const newTemp = temp.filter(temp => temp.id !== id);

    temp = newTemp;
    res.status(200).json({
      status: 'success',
      message: 'Deleted successfully'
    });
  }
};
module.exports = { upload };
