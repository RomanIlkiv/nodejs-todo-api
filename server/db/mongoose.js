var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };

// Connect to DataBase:
// c:\Program Files\MongoDB\Server\3.4\bin>mongod.exe --dbpath /Users/Roman/mongo-data