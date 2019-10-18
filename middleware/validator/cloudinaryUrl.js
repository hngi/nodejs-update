const validator = require('validator');
const spaceTrimer = require('../../helpers/spaceTrimer');

const urlValidator = {
  cloudinaryValidator(req, res, next) {
    let { cloudinaryUrl } = req.body;

    if (cloudinaryUrl === undefined) {
      return res.status(400).json({
        status: 400,
        message: 'cloudinaryUrl is needed'
      });
    }

    // trim spaces
    cloudinaryUrl = spaceTrimer(cloudinaryUrl);

    if (!validator.isURL(cloudinaryUrl)) {
      return res.status(400).json({
        status: 400,
        message: 'invalid url'
      });
    }

    res.locals.cloudinaryUrl = cloudinaryUrl;
    next();
  }
};

module.exports = urlValidator;
