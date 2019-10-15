const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')
const { Schema }  = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  link: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});
UserSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({ _id: this._id }, 'somethingnice');
    return token;
  }

const User= mongoose.model("User", UserSchema);

exports.User = User;
