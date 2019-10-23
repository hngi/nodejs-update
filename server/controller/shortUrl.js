const shortid = require('shortid');
const ShortLink = require('../models/ShortenLink');
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
        // shortUrl: `https://x-shareserver.herokuapp.com/${shortUrlParam}`
        shortUrl: `http://xshare.ga/${shortUrlParam}`
        // shortUrl: `http://localhost:4000/${shortUrlParam}`
      });
      createShortUrl.save();

      res.json({
        success: true,
        message: 'Link shortened successfully',
        shortCode: shortUrlParam,
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
    try {
      const { cloudinaryUrl } = res.locals;

      res.redirect(cloudinaryUrl);
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  },
  async downloadShortenUrl(req, res) {
    try {
      const { cloudinaryUrl } = res.locals;
      let file = res.locals.cloudinaryUrl.slice(48);
      res.setHeader('Content-Disposition', `attachment; filename=${file}`);
      request(cloudinaryUrl)
        .once('data', data => {
          console.log(data);
        })
        .on('error', err => {
          console.log(err);
        })
        .pipe(res);
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  }
};

module.exports = ShortenLink;
