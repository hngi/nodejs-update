const validateRequest = require('../middleware/newuser');
const extractErrors = require('../helpers/helper');

const login = (req, res) => {
  const errors = validateRequest(req);
  if (errors) {
    return res.status(400).json({
      status: 'error',
      error: extractErrors(errors),
    });
  }
}

module.exports = login;
