const mongoose = require('mongoose');

const { Schema } = mongoose;
//add public_id
const urlShortenSchema = new Schema({
  cloudinaryUrl: String,
  shortUrlParam: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const shortenLink = mongoose.model('ShortLink', urlShortenSchema);



//sorts  db for links older than 60 days
getOldlinks = async () => {
  const timestamp = Date.now() - (60 * 24 * 60 * 60);

  const docs = await urlShorten.find({ created_at: { $gte: timestamp } }).exec();

  console.log("Documents found", docs);

  return docs;
}

function removefile(){
  const linksData = getOldLinks();

linksData && linksData.forEach(({ public_id }) => {
      cloudinary.v2.uploader.destroy(public_id, options, callback);
});

}

module.exports = {shortenLink, removefile};