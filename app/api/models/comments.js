'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Comments = new Schema({
  user: String,
  color: String,
  body: {
    type: String,
    required: [true, 'Please enter a comment!']
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comments', Comments)
