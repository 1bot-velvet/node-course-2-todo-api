var mongoose = require('mongoose');
//useMongoClient: true; Line of code as getting deprecation errors
mongoose.Promise = global.Promise; //use local Promise library, not a 3rd party one
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
