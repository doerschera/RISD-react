'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;


const Users = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add your first name.']
  },
  lastName: {
    type: String,
    required: [true, 'Please add your last name.']
  },
  email: {
    type: String,
    unique: [true, "You've already created an account! Please sign in."],
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
    ref: 'Comments'
  }],
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Questions'
  }]
})

module.exports = mongoose.model('Users', Users);
