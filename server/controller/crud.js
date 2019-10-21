
var shortUrls = require('../DataAccessObject/DAO');



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
