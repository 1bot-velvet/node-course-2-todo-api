//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  db.collection('todos').findOneAndUpdate({
    _id: new ObjectID('5c190b00f0a45d6c1951074c')
  }, {
    $set: {completed: true}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

//
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c12faa1c78d7723cc499920')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

  // db.close();
});
