const shortid = require('shortid');
const ShortLink = require('../models/ShortenLink');

const ShortenLink = {
  async shortenUrl(req, res, next) {
    try {
      const { cloudinaryUrl } = res.locals;
      const shortUrlParam = shortid.generate();
      const createShortUrl = await new ShortLink({
        cloudinaryUrl,
        shortUrlParam,
        shortUrl: `http://localhost:4000/${shortUrlParam}`
      });

      createShortUrl.save();
      if (!req.body.isEmail) {
        res.json({
          success: true,
          message: 'Link shortened successfully',
          shortUrl: createShortUrl.shortUrl,
          longUrl: cloudinaryUrl
        });
      } else {
        next();
      }
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  },

  async redirectShortenUrl(req, res) {
    try {
      const { cloudinaryUrl } = res.locals;
      res.redirect(cloudinaryUrl);
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  }
};

module.exports = ShortenLink;
