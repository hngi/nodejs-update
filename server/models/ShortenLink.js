const mongoose = require('mongoose');

const {
  Schema
} = mongoose;

const urlShortenSchema = new Schema({
  awsUrl: String,
  shortUrlParam: String,
  shortUrl: String,
  fileName: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  uploadedBy: {
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },

});

const shortenLink = mongoose.model('ShortLink', urlShortenSchema);

module.exports = shortenLink;