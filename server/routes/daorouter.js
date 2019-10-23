const shortUrls = require('../controller/crud.js');

module.exports = function(Router) {

Router.get('/get', shortUrls.getshorturls);
Router.delete('/remove/:id', shortUrls.removeshortUrl);

};