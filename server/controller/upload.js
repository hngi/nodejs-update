// const multerHelper = require("../middleware/multer");
// const dataUri = multerHelper.dataUri;
// const { v2, cloudinaryConfig } = require("../config/cloudinary");
// const upload = (req, res, next) => {
//   if (req.file) {
//     console.log(req.file);
//     const file = dataUri(req).content;
//     return v2.uploader
//       .upload(file, {
//         resource_type: "auto"
//       })
//       .then(result => {
//             console.log('upload.js ',result);

//         const fileUploadedUrl = result.url;
//         let originalName = req.file.originalname;
//         res.locals["originalName"] = originalName;
//         res.locals["cloudinaryUrl"] = fileUploadedUrl;
//         next();
//       })
//       .catch(err => {
//             console.log('upload.js fail',err);

//         res.status(400).json({
//           message: "Something went wrong while processing your request",
//           success: false,
//           data: {
//             err
//           }
//         });
//       });
//   } else {
//     console.log(false);
//   }
// };

const upload = (req, res, next) => {
  console.log("Files", req.files);
  if (req.files) {
    return res.json({
      message: req.files
    });
  }
  res.json({
    message: "Null"
  });
};

module.exports = upload;
