const upload = (req, res, next) => {
  // console.log("Files", req.files);
  if (req.files) {
    let temp = []
    const files = [...req.files];
    files.forEach(file => {

      let file_upload = {
        originalName: file.originalname,
        awsUrl: file.location,
      }

      temp.push(file_upload)
    })

    res.locals = temp;
    next()
    console.log(res.locals);
  } else {
    res.json({
      message: "Null"
    });
  }
};

module.exports = upload;