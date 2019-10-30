const nanoid = require('nanoid');
const validateCookie = (req, res, next) => {
  if (req.cookies.userId) {
    next();
  } else {
    const id = nanoid();
    res.cookie("userId", id, {
      maxAge: 60 * 60 * 24 * 365 * 10,
    });
    next();
  }
};

module.exports = validateCookie;