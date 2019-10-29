const ShortenLink = require('../models/ShortenLink');

/**
 * This function renders the guest page and gets list of uploaded links
 * @param {object} req
 * @param {object} res
 * @returns {object} response object with uploaded links
 */
const guestPage = (req, res) => {

  const {
    userId
  } = req.cookies;

  ShortenLink.find({
      uploadedBy: userId
    })
    .sort({
      createdAt: "desc"
    })
    .then(result => {
      return res.status(200).json({
        data: result,
        uploadedBy: userId,
        success: true
      });
    });
};

module.exports = guestPage;