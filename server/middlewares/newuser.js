const { check, validationResult } = require('express-validator');
const extractErrors = require('../helpers/helper');
const validateUser = (req, res, next) => {
  req
    .check('password')      
    .exists()
    .withMessage('Password should not be empty')
    .isLength({ min: 8 })
    .withMessage('Password should be a minimum of 8 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/)
    .withMessage('Password should not be empty, minimum eight characters, at least one letter, one number and one special character')
    .trim();
  req
    .check('email')      
    .exists()
    .withMessage('Email should not be empty')
    .matches(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .withMessage('Invalid email supplied')
    .trim();
  const errors = req.validationErrors();
  if (errors) {
    return res.status(400).json({
      status: 'error',
      error: extractErrors(errors),
    });
  }
  return next();
}

module.exports = validateUser;
