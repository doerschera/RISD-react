'use strict'

const mongoose = require('mongoose');

const Images = new mongoose.Schema({
  name: String,
  images: Array
})

module.exports = mongoose.model('Images', Images);
