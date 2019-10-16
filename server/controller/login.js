const { User } = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;
const validateRequest = require("../middleware/newuser");
const extractErrors = require("../helpers/helper");

/**
 * This function logs a user in with the email and password provided
 * @param {object} req
 * @param {object} res
 * @returns {object} response object with token
 */
const login = (req, res) => {
  const errors = validateRequest(req);
  if (errors) {
    return res.status(400).json({
      status: "error",
      error: extractErrors(errors)
    });
  }

  User.findOne({
    email: req.body.email
  }).then(user => {
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials"
      });
    }
    bcrypt.compare(req.body.password, user.password).then(valid => {
      if (!valid) {
        return res.status(401).json({
          success: false,
          message: "Invalid Credentials"
        });
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
        expiresIn: "24h"
      });
      res.status(200).json({
        user: {
          id: user._id,
          username: user.username,
          email: user.email
        },
        token: token,
        success: true
      });
    });
  });
};

module.exports = login;
