const uuidv1 = require('uuid/v1');

const data = {
  upload(req, res, next) {
    let temp = [];
    // console.log("Files", req.files);
    if (req.files) {
      const files = [...req.files];
      files.forEach(file => {
        let file_upload = {
          id: uuidv1(),
          originalName: file.originalname,
          awsUrl: file.location
        };
        temp.push(file_upload);
      });

      res.locals.temp = temp;
      next();
    } else {
      res.json({
        message: 'Null'
      });
    }
  },

  del(req, res) {
    const id = req.params.id;

    temp.forEach(temp => {
      if (id !== temp.id) {
        return res.status(400).json({
          message: `file with id ${id} does not exist`
        });
      }
    });

    const newTemp = temp.filter(temp => temp.id !== id);

    temp = newTemp;
    res.status(200).json({
      status: 'success',
      message: 'deleted successfully'
    });
  }
};

module.exports = data;
