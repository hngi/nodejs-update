const mongoose = require("mongoose");
const validUrl = require("valid-url");
const ShortenLink = mongoose.model("ShortenLink");
const shortid = require("shortid");
const errorUrl='http://localhost/error';

module.exports = app => {

  app.get("/api/Xshare/:code", async (req, res) => {
    const urlCode = req.params.code;
    const item = await ShortenLink.findOne({ urlCode: urlCode });
    if (item) {
      return res.redirect(item.CloudinaryUrl);
    } else {
      return res.redirect(errorUrl);
    }
  });
  app.post("/api/Xshare", async (req, res) => {
    const { CloudinaryUrl, shortBaseUrl } = req.body;
    if (validUrl.isUri(shortBaseUrl)) {
    } else {
      return res
        .status(401)
        .json(
          "Invalid Base Url"
        );
    }
    const urlCode = shortid.generate();
    const updatedAt = new Date();
    if (validUrl.isUri(CloudinaryUrl)) {
      try {
        const item = await ShortenLink.findOne({ CloudinaryUrl: CloudinaryUrl });
        if (item) {
          res.status(200).json(item);
        } else {
          shortUrl = shortBaseUrl + "/" + urlCode;
          const item = new ShortenLink({
            CloudinaryUrl,
            shortUrl,
            urlCode,
            updatedAt
          });
          await item.save();
          res.status(200).json(item);
        }
      } catch (err) {
        res.status(401).json("Invalid User Id");
      }
    } else {
      return res
        .status(401)
        .json(
          "Invalid Original Url"
        );
    }
  });
};