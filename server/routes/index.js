const express = require('../node_modules/express');
const {
  redirectShortenUrl,
  downloadShortenUrl
} = require('../controller/shortUrl');
const { findShortenUrl } = require('../middleware/findShortenUrl');
const router = express.Router();
const sendEmail=require('../middleware/sendEmail')
const loginUser = require('../controller/login');
const registerUser = require('../controller/register');
const uploadFile = require('../controller/upload');
const multer = require('../middleware/multer');
const shortenLink = require('../controller/shortUrl');
const shortUrl = require('../controller/crud.js');
router.get('/:shortenId', findShortenUrl, redirectShortenUrl);
router.post('/api/auth/login', loginUser);
router.post('/api/auth/register', registerUser);
router.post('/api/auth/sendEmail', sendEmail);
// router.post('/:shortenId',findShortenUrl,downloadShortenUrl)
router.post(
  '/api/auth/upload',
  multer.multerUploads,
  uploadFile,
  shortenLink.shortenUrl,
);
router.get('/get', shortUrl.getshorturls);
router.delete('/remove/:id',shortUrl.removeshortUrl);

module.exports = router;
