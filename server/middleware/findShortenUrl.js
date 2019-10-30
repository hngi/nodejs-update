const ShortLink = require('../models/ShortenLink');

const findShortenUrl = {
  async findShortenUrl(req, res, next) {
    try {
      const { shortenId } = req.params;

      const findUrl = await ShortLink.find({
        shortUrlParam: shortenId
      });

      if (Object.keys(findUrl).length === 0) {
        return res.status(404).json({
          status: 404,
          message: 'not found'
        });
      }

      const { cloudinaryUrl,fileName } = findUrl[0];
      res.locals.cloudinaryUrl = cloudinaryUrl;
      res.locals.fileName = fileName;
      next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  }
};

module.exports = findShortenUrl;
