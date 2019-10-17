const mongoose = require('mongoose');

const { Schema } = mongoose;

const urlShortenSchema = new Schema({

  _id: mongoose.Schema.Types.ObjectId,
  cloudinaryUrl: String,
  shortUrlParam: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }

});

const shortenLink = mongoose.model('ShortLink', urlShortenSchema);

module.exports = shortenLink;
