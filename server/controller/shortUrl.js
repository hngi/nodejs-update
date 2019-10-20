const shortid = require('shortid');
const ShortLink = require('../models/ShortenLink');
const sendEmail = require('../middleware/sendEmail');
const request = require('request');
const path = require('path');
const url = require('url');
const ShortenLink = {
  async shortenUrl(req, res, next) {
    try {
      const { cloudinaryUrl } = res.locals;
      const shortUrlParam = shortid.generate();
      const createShortUrl = await new ShortLink({
        cloudinaryUrl,
        shortUrlParam,
        shortUrl: `https://x-shareserver.herokuapp.com/${shortUrlParam}`
      });
      createShortUrl.save();
      if (req.body.isEmail) {
        sendEmail(req, createShortUrl.shortUrl, res);
      }
      res.json({
        success: true,
        message: 'Link shortened successfully',
        shortUrl: createShortUrl.shortUrl,
        longUrl: cloudinaryUrl
      });
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  },

  async redirectShortenUrl(req, res) {
    // console.log(3,'chjhjj');
    try {
      const { cloudinaryUrl } = res.locals;
      // res.redirect(cloudinaryUrl);
      var parsed = url.parse(cloudinaryUrl);
      var fileName = path.posix.basename;
      // console.log(4,fileName);
      res.setHeader('content-disposition', `attachment; filename=file.png`);
      request(cloudinaryUrl).pipe(res);
      res.json('Download complete');
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  }
};

module.exports = ShortenLink;
