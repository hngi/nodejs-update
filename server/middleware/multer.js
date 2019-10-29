const multer = require("multer");
const multerS3 = require("multer-s3");
const { s3Config } = require("../config/aws3");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const zipFolder = require('zip-a-folder');


const fs = require('fs');
const directory = '../uploads/';
const directory2 = '../download/';


const fileFilter = (req, file, cb) => {
  let extname = file.originalname
    .toLowerCase()
    .match(
      /.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|xlsx|avi|flv|mkv|xml|exe|zip)$/
    );
  let mimetype = file.mimetype.match(
    /.(jpeg|jpg|png|gif|mp4|mp3|fig|docx|pdf|xlsx|avi|flv|mkv|xml|exe|zip)$/
  );
  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file format"), false);
  }
};


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `../uploads/`)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


const upload = multer({ storage: storage }).array('file', 10)



const zipper = (req, res, next) => {
  
  var name = req.files[0].originalname.split('.')[0]
  class zipper {
    static main() {
      zipFolder.zipFolder(`../uploads/`, `../download/${name}.zip`, function (err) {
       
        next();
        if (err) {
          console.log('Something went wrong!', err);
        }
      });
    }
  }
  zipper.main();
  console.log('file has been ziped')

}

const uploadFileToS3 = async (req, res,next) => {
  try {
    var name = req.files[0].originalname.split('.')[0]
    
    // Read content from the file
    const fileContent = await fs.readFileSync(`../download/${name}.zip`);

    // Setting up S3 upload parameters
    const params = {
      acl: "public-read",
      Bucket: 'emex-bucket',
      Key: 'xshaer_' + Date.now() + '.zip', // File name you want to save as in S3
      Body: fileContent
    };
    let temp = []
    // Uploading files to the bucket
   await s3Config.upload(params, function (err, data) {
      if (err) {
        throw err;
      }
     
     console.log(`File uploaded successfully. ${data.Location}`);
     let fileUpload = {
       originalName: data.key,
       awsUrl: data.Location,
     }
     temp.push(fileUpload)
     res.locals = temp;
     console.log(res.locals)
     remove()
     next()
   })
  
   
   
  } catch (err) {
    console.log(err)
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
    console.log('upload file has been deleted')
  });
  fs.readdir(directory2, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory2, file), err => {
        if (err) throw err;
      });
    }
    console.log('download file has been deleted')
  });
}

const multerUploads = multer({
  storage: multerS3({
    s3: s3Config,
    acl: "public-read",
    bucket: "emex-bucket",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
        "-" +
        Date.now() +
        path.extname(file.originalname)
      );
    }
  })
}).array("file", 4);

module.exports = { multerUploads, zipper, upload, uploadFileToS3 };
