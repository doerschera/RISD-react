'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Users = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\..+/, 'Please enter a valid email address.']
  },
  password: {
    type: String,
    required: true,
    validate: [
      function(password) {
        return password.length >= 6
      },
      'Passwords must contain at least 6 characters.'
    ]
  },
  applicantType: String,
  currentGrade: String,
  areaOfInterest: String,
  color: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }]
})

module.exports = mongoose.model('Users', Users);
