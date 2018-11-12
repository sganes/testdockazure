var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'staging' )
    mongoose.connect(`mongodb://0.0.0.0:27017/sampledb`, { useNewUrlParser: true });
else
    mongoose.connect(`mongodb://localhost:27017/sampledb`, { useNewUrlParser: true });    
module.exports = { mongoose }
