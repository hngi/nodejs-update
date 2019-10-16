const validateRequest = require('../middleware/newuser');
const extractErrors = require('../helpers/helper');
const { validate } = require('../models/User');

const login = (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.json({
      success: false,
      message: error.details[0].message
    });
};

module.exports = login;
