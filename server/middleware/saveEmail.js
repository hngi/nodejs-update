const emailCollection = require('../models/emailCollection');

const emailDataCollection = {
  async saveEmail(req, res, next) {
    try {
      const {
        data: { to }
      } = res.locals;

      const checkEmail = await emailCollection.find({ email: to });

      if (Object.keys(checkEmail).length === 0) {
        const saveEmailData = await emailCollection.create({ email: to });
        saveEmailData.save();
        return next();
      }

      return next();
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  }
};

module.exports = emailDataCollection;
