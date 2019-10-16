const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const {
  Schema
} = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: Date.now
  }
});
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({
    _id: this._id
  }, 'somethingnice');
  return token;
}

const User = mongoose.model("User", UserSchema);

function validateUser(user) {
  const schema = Joi.object({
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1029).required()
  });
  return schema.validate(user);
}



exports.User = User;
exports.validate = validateUser;