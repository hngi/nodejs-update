import Datauri from 'datauri';

// Upload
exports.upload = (req, res, next) => {
    if(req.file) {
        const file = dataUri(req).content;
        return uploader.upload(file).then((result) => {
          const fileUploadedUrl = result.url;
          return res.status(200).json({
            messge: 'Your File has been uploded successfully!',
            data: {
                fileUploadedUrl
            }
          })
        }).catch((err) => res.status(400).json({
          messge: 'someting went wrong while processing your request',
          data: {
            err
          }
        }))
       }
};