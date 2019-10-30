const express = require("express");
const {
  redirectShortenUrl,
  downloadShortenUrl
} = require("../controller/shortUrl");
const {
  findShortenUrl
} = require("../middleware/findShortenUrl");
const router = express.Router();

const sendEmail = require("../middleware/sendEmail").sendEmail;
const saveEmail = require('../middleware/saveEmail').saveEmail;
const sendEmailValidator = require('../middleware/validator/emailMsgValidator').validateEmail;
const loginUser = require("../controller/login");
const registerUser = require("../controller/register");
const uploadFile = require("../controller/upload");
const {
  multerUploads,
  zipper,
  upload,
  uploadFileToS3
} = require("../middleware/multer");
const shortenLink = require("../controller/shortUrl");
const validateCookie = require('../middleware/validator/validateCookie')

router.get("/:shortenId", findShortenUrl, (req, res) => {
  const response = [res.locals]
  //console.log(response[0].downloadCount)
  var currentCount = response[0].downloadCount
  const fullLink = req.protocol + "://" + req.get("host");
  const shortenId = req.params.shortenId;
  res.render("download", {
    shortenId: shortenId,
    fullLink: fullLink,
    currentCount: currentCount
  });
});
//router.get('/:shortenId', findShortenUrl, redirectShortenUrl);
router.post("/api/auth/login", loginUser);
router.get("/api/auth/uploads/:id", shortenLink.findUserShortLinks);
router.get("/api/auth/uploads", shortenLink.findAll);
router.post("/api/auth/register", registerUser);
router.post('/api/auth/sendEmail', sendEmailValidator, saveEmail, sendEmail);
router.delete("/api/auth/delete/:id", uploadFile.del);
router.post("/:shortenId", findShortenUrl, redirectShortenUrl);
router.post("/api/auth/upload/", validateCookie, multerUploads, uploadFile.upload, shortenLink.shortenUrl);
router.post("/api/auth/upload/folder/:file", validateCookie, upload, zipper, uploadFileToS3, shortenLink.folderUrl);
router.get('/api/auth/test/', (req, res) => {
  res.render('test')
})
module.exports = router;