const mongoose = require("mongoose");
const { Schema } = mongoose;
const urlShortenSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  CloudinaryUrl: String,
  urlCode: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("link", urlShortenSchema);
