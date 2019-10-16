// Upload
exports.upload = (req, res, next) => {
    const file = req.files.file;
    cloudinary.uploader.upload(file.tempFilePath, function(err, result) {
        res.send({
            success: true,
            data: {'fileurl': result.secure_url}
        })
    })
};