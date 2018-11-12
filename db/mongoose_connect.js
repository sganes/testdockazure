var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const host = process.env.host || 'localhost';
mongoose.connect(`mongodb://${host}:27017/sampledb`, { useNewUrlParser: true });
module.exports = { mongoose }
