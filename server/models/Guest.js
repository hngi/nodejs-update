const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const GuestSchema = new Schema({
  awsUrl: String,
  shortUrlParam: String,
  shortUrl: String,
  fileName: String,
  uploadedBy: {
    type: String,
    required: true
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

const Guest = mongoose.model('Guest', GuestSchema);

module.exports = Guest;