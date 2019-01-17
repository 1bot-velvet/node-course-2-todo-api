var mongoose = require('mongoose');

//creating and setting features within the database
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true//removes any starting or trailing spaces
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {Todo};






//creating a new document
// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });

//saves the above document
// newTodo.save().then((dec) => {
//   console.log('Saved todo', doc);
// }, (e) => {
// console.log('unable to save todo')
// });

// var secondTodo = new Todo({
//   text: ' Edit photos          ',
// });
//
// secondTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }), (e) => {
// console.log('Unable to save todo', e);
// };
