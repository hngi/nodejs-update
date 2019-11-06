const shortid = require('shortid');
const ShortLink = require('../models/ShortenLink');
const request = require('request');
const path = require('path');
const url = require('url');
const JSZip = require('jszip');

const ShortenLink = {
  async findUserShortLinks(req, res, next) {
    const email = req.params.email
    
    ShortLink.find({uploadedBy: email}, function(err, allUserShortLink) {
      if (err) {
        return err;
      } else {
        res.json({success:true,uploads:allUserShortLink});
      }
    });
  },
  async findAll(req, res, next) {
    ShortLink.find({}, function(err, allShortLink) {
      if (err) {
        return err;
      } else {
        res.json({ success: true, uploads: allShortLink });
      }
    });
  },
  async shortenUrl(req, res, next) {
    var uploadedBy;
      const { email } = req.body;
      uploadedBy= email
    
    try {
      let newUrl = [];
      const { temp: response } = res.locals;
      const getSize = (arr) => {
        if (arr <= 1000) {
          return `${arr}byte`
        }
        if (arr >= 1000 && arr <= 100000) {
          return `${(arr / 1000).toFixed(1)}kb`
        }
        if (arr >= 1000000 && arr <= 100000000) {
          return `${(arr / 1000000).toFixed(1)}mb`
        }
        if (arr >= 1000000000) {
          return `${(arr / 1000000000).toFixed(1)}gb`
        }
      }

      response.forEach(item => {
        const awsUrl = item.awsUrl;
        const size = getSize(item.size);
        const fileName = item.originalName;
        const shortUrlParam = shortid.generate();
        const createShortUrl = new ShortLink({
          awsUrl,
          shortUrlParam,
          fileName,
          shortUrl: `http://xshare.gq/${shortUrlParam}`,
          //shortUrl: `http://localhost:4000/${shortUrlParam}`,
          uploadedBy: uploadedBy,
          size
        }); 
        createShortUrl.save();

        let url = {
          message: 'Link shortened successfully',
          shortCode: shortUrlParam,
          shortUrl: createShortUrl.shortUrl,
          longUrl: awsUrl,
          fileName: fileName,
          size: size
        };

        newUrl.push(url);
      });

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
  async folderUrl(req, res, next) {
    var uploadedBy;
      const { email } = req.body;
           uploadedBy= email

    try {
      let newUrl = [];
      const response = [...res.locals];

      response.forEach(item => {
        const awsUrl = item.awsUrl;
        const fileName = item.originalName;
        const shortUrlParam = shortid.generate();
        const createShortUrl = new ShortLink({
          awsUrl,
          shortUrlParam,
          fileName,
          shortUrl: `http://xshare.gq/${shortUrlParam}`,
          // shortUrl: `http://localhost:4000/${shortUrlParam}`,

          uploadedBy: uploadedBy
        });
        createShortUrl.save();

        let url = {
          message: 'Link shortened successfully',
          shortCode: shortUrlParam,
          shortUrl: createShortUrl.shortUrl,
          longUrl: awsUrl
        };

        newUrl.push(url);
      });

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
      const response = [res.locals];
      var currentCount = response[0].downloadCount;
      var shortUrlParam = response[0].shortUrlParam;
      const newCount = currentCount + 1;
      const data = {
        downloadCount: newCount
      };
      await ShortLink.findOneAndUpdate(
        {
          shortUrlParam
        },
        data,
        err => {
          if (err) {
            throw err;
          }
        }
      );
      response.forEach(link => {
        res.redirect(link.awsUrl);
      });
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  },
  async downloadShortenUrl(req, res) {
    try {
      const response = [...res.locals];
      response.forEach(link => {
        let file = link.originalName;
        let awsUrl = link.awsUrl;
        res.setHeader('Content-Disposition', `attachment; filename=${file}`);
        request(awsUrl)
          .once('data', data => {
            console.log(data);
          })
          .on('error', err => {
            console.log(err);
          })
          .pipe(res);
      });
    } catch (error) {
      res.json({
        success: true,
        message: error.message
      });
    }
  }
};

module.exports = ShortenLink;
