const Tracker = require('../models/tracker');
const { respondWithWarning } = require('../helpers/responseHelper')

/**
 * This function get Tracks for each file download
 * @param {object} req
 * @param {object} res
 * @returns {object} response object with url Tracker
 */
const getUrlFileTracker = async (req, res) => {
	try {
		const { urlId } = req.params;
  
    const downloadTracker = await Tracker.find({ urlId })
      .populate('urlId')
      .exec(function (err, messages) {
        if (err) throw err;
        console.log(JSON.stringify(messages, undefined, 4));
      });
  } 
  catch (err) {
		console.log(err);
    return respondWithWarning(res, 500, "Server error");
  }
};

module.exports = getUrlFileTracker