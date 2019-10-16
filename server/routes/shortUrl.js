const express = require('express');
const { shortenUrl } = require('../controller/shortUrl');
const {
  cloudinaryValidator
} = require('../middleware/validator/cloudinaryUrl');

const router = express.Router();

router.post('/xshare', cloudinaryValidator, shortenUrl);

module.exports = router;
