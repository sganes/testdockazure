var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOCONNECTION , { useNewUrlParser: true });
module.exports = { mongoose }