const nanoid = require('nanoid')
const validateCookie = (req, res, next) => {
  if (req.cookies.userId) {
    next();
  } else {
    const id = nanoid();
    res.cookie("userId", id, {
      maxAge: 1000 * 60 * 60 * 60 * 30,
    });
    next();
  }
};

module.exports = validateCookie