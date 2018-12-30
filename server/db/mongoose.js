var mongoose = require('mongoose');
//useMongoClient: true; Line of code as getting deprecation errors
mongoose.Promise = global.Promise; //use local Promise library, not a 3rd party one
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};


//mongodb://heroku_9zm1rxqn:9d4bh3p9ngohp5dj2tjchv3j0c@ds145584.mlab.com:45584/heroku_9zm1rxqn
