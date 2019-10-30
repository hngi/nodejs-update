const multer = require('multer');
const multerS3 = require('multer-s3');
const { s3Config } = require('../config/aws3');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const zipFolder = require('zip-a-folder');

const fs = require('fs');
const directory = '../uploads/';
const directory2 = '../download/';

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `../uploads/`);
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage }).array('file', 10);

const zipper = (req, res, next) => {
  var name = req.files[0].originalname.split('.')[0];
  class zipper {
    static main() {
      zipFolder.zipFolder(`../uploads/`, `../download/${name}.zip`, function(
        err
      ) {
        next();
        if (err) {
          throw err;
        }
      });
    }
  }
  zipper.main();
};

const uploadFileToS3 = async (req, res, next) => {
  try {
    var name = req.files[0].originalname.split('.')[0];
    var paramsName =req.params.file
    // Read content from the file
    const fileContent = await fs.readFileSync(`../download/${name}.zip`);
    //console.log(paramsName)
    // Setting up S3 upload parameters
    const params = {
      Bucket: 'hngi-nodejs-update',
      ACL: 'public-read',
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      Key: `${paramsName}.zip`, // File name you want to save as in S3
      Body: fileContent
    };
    let temp = [];
    // Uploading files to the bucket
    await s3Config.upload(params, function(err, data) {
      if (err) {
        throw err;
      }

      let fileUpload = {
        originalName: data.key,
        awsUrl: data.Location
      };
      temp.push(fileUpload);
      res.locals = temp;
      remove();
      next();
    });
  } catch (err) {
    return err;
  }
};

const remove = () => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
  fs.readdir(directory2, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory2, file), err => {
        if (err) throw err;
      });
    }
  });
};

const multerUploads = multer({
  storage: multerS3({
    s3: s3Config,
    acl: 'public-read',
    bucket: 'hngi-nodejs-update',
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          path.extname(file.originalname)
      );
    }
  })
}).array('file', 4);

module.exports = { multerUploads, zipper, upload, uploadFileToS3 };
