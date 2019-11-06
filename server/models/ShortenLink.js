const mongoose = require("mongoose");

const { Schema } = mongoose;

const urlShortenSchema = new Schema({
  awsUrl: String,
  shortUrlParam: String,
  shortUrl: String,
  downloadCount: {
    type: Number,
    default: 0
  },
  fileName: String,
  uploadedBy: {
    type: String,
    required: false
  },
  size:String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const shortenLink = mongoose.model("ShortLink", urlShortenSchema);

module.exports = shortenLink;
