const { extractErrors } = require('../helpers/helper');
const mongoose = require('mongoose');
const { User } = require('../models/User');
const { validate } = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res.json({
      success: false,
      message: error.details[0].message
    });
  //checking if the user already exist
  let userhere = await User.findOne({ email: req.body.email });
  if (userhere)
    return res.json({
      success: false,
      message: 'User already exists'
    });
  //creating user
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(user.password, salt);
  await user.save();
  //creating jwt
  const token = jwt.sign({ _id: user._id }, 'secret');
  res.header('x-auth-token', token).json({
    user: { id: user._id, username: user.username, email: user.email },
    token: token,
    success: true
  });
};

module.exports = register;
