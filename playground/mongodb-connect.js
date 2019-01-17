//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);

MongoClient.connect('mongodb://localhost:27017/playground', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something that needs to be done',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

//insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   Name: 'Mary',
  //   Age: 45,
  //   Location: 'Oxford'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
