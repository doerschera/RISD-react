'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Questions = new Schema({
  title: {
    type: String,
    required: [true, "Don't forget the question!"]
  },
  body: String,
  category: {
    type: String,
    required: [true, "Please add a category"]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comments'
  }]
})


module.exports = mongoose.model('Questions', Questions);
