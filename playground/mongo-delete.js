//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text: "Eat"}).then ((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({Name: "Mary"});



  //delete one
  // db.collection('Todos').deleteOne({text: "Eat"}).then ((result) => {
  //   console.log(result);
  // });


  //delete find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then ((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c12b0fccfa2d812c4174928")}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });
//challange

  // db.close();
});
