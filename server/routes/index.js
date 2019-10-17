const express = require('express');
const { redirectShortenUrl } = require('../controller/shortUrl');
const { findShortenUrl } = require('../middleware/findShortenUrl');
const router = express.Router();

const loginUser = require('../controller/login');
const registerUser = require('../controller/register');
const uploadFile = require('../controller/upload');
const multer = require('../middleware/multer');
const sendEmail = require('../middleware/sendEmail');
const shortenLink = require('../controller/shortUrl');
router.get('/:shortenId', findShortenUrl, redirectShortenUrl);
router.post('/api/auth/login', loginUser);
router.post('/api/auth/register', registerUser);
router.post(
  '/api/auth/upload',
  multer.multerUploads,
  uploadFile,
  shortenLink.shortenUrl,
  sendEmail
);
module.exports = router;
