const shortid = require('shortid');
const ShortLink = require('../models/ShortenLink');
const Guest = require('../models/Guest');
const request = require('request');
const path = require('path');
const url = require('url');


const ShortenLink = {
  async shortenUrl(req, res, next) {
    const {
      userId
    } = req.cookies
    try {
      let newUrl = []
      let response = [...res.locals]

      response.forEach(item => {

        const awsUrl = item.awsUrl;
        const fileName = item.originalName;
        const shortUrlParam = shortid.generate();
        const urlData = {
          awsUrl,
          shortUrlParam,
          fileName,
          shortUrl: `http://xshare.ga/${shortUrlParam}`,
          uploadedBy: userId
        }

        // Guests
        if (userId) {
          const createGuest = new Guest(urlData)
          createGuest.save();
        }

        const createShortUrl = new ShortLink(urlData);
        createShortUrl.save();

        let url = {
          message: 'Link shortened successfully',
          shortCode: shortUrlParam,
          shortUrl: createShortUrl.shortUrl,
          longUrl: awsUrl
        }

        newUrl.push(url)
      })

      res.json({
        success: true,
        data: newUrl
      });

    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  },
  async redirectShortenUrl(req, res) {
    try {

      const {
        awsUrl
      } = res.locals;
      res.redirect(awsUrl)

    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  },
  async downloadShortenUrl(req, res) {
    try {
      const {
        awsUrl,
        fileName
      } = res.locals;
      let file = fileName;
      res.setHeader('Content-Disposition', `attachment; filename=${file}`);
      request(awsUrl)
        .once('data', data => {
          console.log(data);
        })
        .on('error', err => {
          console.log(err);
        })
        .pipe(res);
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  }
};

module.exports = ShortenLink;