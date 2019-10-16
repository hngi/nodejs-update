const shortid = require('shortid');
const ShortLink = require('../models/ShortenLink');

const ShortenLink = {
  async shortenUrl(req, res) {
    try {
      const { cloudinaryUrl } = res.locals;
      const shortUrlParam = shortid.generate();

      const createShortUrl = await new ShortLink({
        cloudinaryUrl,
        shortUrlParam,
        shortUrl: `http://localhost:3500/${shortUrlParam}`
      });

      createShortUrl.save();

      res.status(201).json({
        status: 201,
        message: 'link shortened successfully',
        shortUrl: createShortUrl.shortUrl
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  },

  async redirectShortenUrl(req, res) {
    try {
      const { cloudinaryUrl } = res.locals;
      res.redirect(cloudinaryUrl);
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  }
};

module.exports = ShortenLink;
