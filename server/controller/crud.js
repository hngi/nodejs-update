
var shortUrls = require('../DataAccessObject/DAO');

exports.getshorturls = function(req, res, next) {
    shortUrls.get({}, function(err, shortUrls) {
        if(err) {
            res.json({
                error: err
            });
        }
        res.json({
            shortUrls: shortUrls
        });
    });
};

exports.removeshortUrl = function(req, res, next) {
    shortUrls.delete({_id: req.params.id}, function(err, shortUrl) {
        if(err) {
            res.json({
                error : err
            });
        }
        res.json({
            message : "Url deleted successfully"
        });
    });
};

module.exports = crud;