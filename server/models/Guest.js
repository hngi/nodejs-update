const mongoose = require('mongoose')
const { Schema }  = mongoose;

const GuestSchema = new Schema({
  link: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

const Guest =  mongoose.model("Guest", GuestSchema);

module.exports = Guest;