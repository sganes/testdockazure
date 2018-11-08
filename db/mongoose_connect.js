var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const hostname = process.env.hostname || 'localhost'
mongoose.connect(`mongodb://${hostname}:27017/tododb` , { useNewUrlParser: true });

module.exports = { mongoose }