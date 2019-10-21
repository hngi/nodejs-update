const mongoose = require('mongoose');
const urlShortenSchema = require('../models/ShortenLink');

urlShortenSchema.statics = {

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
};

var urlShortenModel = mongoose.model('urlShorten', urlShortenSchema);
module.exports = urlShortenModel;