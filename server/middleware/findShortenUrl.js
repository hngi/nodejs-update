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

      const { awsUrl, fileName, downloadCount, shortUrlParam, size} = findUrl[0];
      res.locals.awsUrl = awsUrl;
      res.locals.fileName = fileName;
      res.locals.downloadCount = downloadCount;
      res.locals.shortUrlParam = shortUrlParam;
      res.locals.size = size;
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
