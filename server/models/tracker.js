const mongoose = require('mongoose')
const { Schema } = mongoose;

const trackerSchema = new Schema({
  urlShortenId: { type: Schema.Types.ObjectId, ref: 'UrlShorten', required: true },
  ip: String,
  country: String,
  city: String,
  device: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tracker", trackerSchema);
