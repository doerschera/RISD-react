'use strict'

const express = require('express');

const Images = require('./models/images');

const router = express.Router();

router.get('/api/tour-images/:stop', (req, res) => {
  console.log(req.params.stop);
  let stop = req.params.stop;

  Images.find({name: stop}, (err, results) => {
    if(err) console.log(err);

    res.send(results[0].images);
  })
})

module.exports = router;
