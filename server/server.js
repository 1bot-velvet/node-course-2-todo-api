var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);//should remove this Line
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

});

app.get('/todos/', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// setting up GET request /todos/123xxx
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  //Validate id using isValid
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();// for invalid id, sending back 404 and empty body
  };
  //findById
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();//no document that matches query, send back 404 and empty body
    };
    res.send({todo});//success, send back todo
  }).catch((e) => {
    res.status(400).send();// error
      //400 - & empty body
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
