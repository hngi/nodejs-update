const validateUser = req => {
  req
    .check('password')
    .exists()
    .withMessage('Password should not be empty')
    .isLength({ min: 3 })
    .withMessage('Password should be a minimum of 3 characters')
    // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/)
    // .withMessage(
    //   'Password should not be empty, minimum eight characters, at least one letter, one number and one special character'
    // )
    .trim();
  req
    .check('email')
    .exists()
    .withMessage('Email should not be empty')
    .matches(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .withMessage('Invalid credentials')
    .trim();
  return req.validationErrors();
};

module.exports = validateUser;
