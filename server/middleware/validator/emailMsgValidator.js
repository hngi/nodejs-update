const validate = {
  validateEmail(req, res, next) {
    const { name, to, message, link } = req.body;
    if (
      name == '' ||
      name == undefined ||
      name == null ||
      to == '' ||
      to == undefined ||
      to == null ||
      message == '' ||
      message == undefined ||
      message == null
    ) {
      return res.status(400).json({
        message: 'Input fields are required',
        success: false
      });
    }

    res.locals.data = { name, to, message, link };
    next();
  }
};

module.exports = validate;
