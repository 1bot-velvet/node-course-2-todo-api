const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  email: {
  type: String,
  required: true,
  trim: true,
  minlength: 1,
  unique: true,
  validate: {
    validator: validator.isEmail,
    message: `{VALUE} is not a valid email`
  }
},
password: {
  type: String,
  require: true,
  minlength: 6
},
tokens: [{
  access: {
    type: String,
    require: true
  },
  token: {
    type: String,
    require: true
  }
}]
}, {usePushEach: true});//EXTRA LINE BUT NOT SURE IT'S SOLVING THE $pushAll ERRORS, USED CONCAT AND CREATED myArray LINE

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

//  user.tokens.push({access, token});
//ORIGNAL CODE BUT GOT $pushAll ERRORS AND CONCAT WAS RECOMMENDED
  user.tokens = user.tokens.concat({access, token});

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    return Promise.reject();
    //long version of the return above
    // return new Promise((resolve, reject) => {
    //   reject();
    //});
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  })
};

//Mongoose middleware which runs only if password has been changed/created and runs before a save to the database
UserSchema.pre('save', function (next) {
  var user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

var User = mongoose.model('User', UserSchema)

module.exports = {User};


// var user = new User({
//   email: '1bot@nono.com        '
// });
//
// user.save().then((doc) => {
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// });
