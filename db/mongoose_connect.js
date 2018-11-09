var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/sampledb', { useNewUrlParser: true });
module.exports = { mongoose }