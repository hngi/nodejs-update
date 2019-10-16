const mongoose = require("mongoose");
const validUrl = require("valid-url");
const ShortenLink = mongoose.model("link");
const shortid = require("shortid");
require("dotenv").config();
const BASE_URL = `http://localhost:${process.env.PORT}`;

const errorUrl = "/error";

const getShortenLink = async (req, res) => {
  const urlCode = req.params.code;
  const item = await ShortenLink.findOne({ urlCode: urlCode });
  console.log(item);

  if (item) {
    return res.redirect(item.CloudinaryUrl);
  } else {
    return res.redirect(errorUrl);
  }
};

const shortenLink = async (req, res) => {
  const { CloudinaryUrl } = req.body;

  if (validUrl.isUri(CloudinaryUrl)) {
    try {
      const user = req.id;
      const urlCode = shortid.generate();
      const updatedAt = new Date();
      const item = await ShortenLink.findOne({ CloudinaryUrl: CloudinaryUrl });
      if (item) {
        res.status(200).json(item);
      } else {
        shortUrl = BASE_URL + "/" + urlCode;
        const item = new ShortenLink({
          user,
          CloudinaryUrl,
          shortUrl,
          urlCode,
          updatedAt
        });
        await item.save();
        res.status(200).json(item);
      }
    } catch (err) {
      console.log(err);

      res.status(401).json("Invalid User Id");
    }
  } else {
    return res.status(401).json("Invalid Original Url");
  }
};

module.exports = { shortenLink, getShortenLink };
