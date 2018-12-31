const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} =require('./../server/models/user')

// Todo.remove({}) removes everything for example:
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5c292e49b3e6355419a9edc0'}).then((todo) => {
  console.log(todo);
});
Todo.findByIdAndRemove('5c292e49b3e6355419a9edc0').then((todo) => {
  console.log(todo);
});
//both above do the same thing
