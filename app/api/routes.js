'use strict'

const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const config = require('../../config');
const upload = multer({ dest: './uploads/'});

const Images = require('./models/images');

const router = express.Router();

cloudinary.config({
  cloud_name: config.name,
  api_key: config.key,
  api_secret: config.secret
});

router.get('/api/tour-images/:stop', (req, res) => {
  console.log(req.params.stop);
  let stop = req.params.stop;

  Images.find({name: stop}, (err, results) => {
    if(err) console.log(err);

    res.send(results[0].images);
  })
})

router.post('/api/upload', upload.single('image'), function(req, res){
    let path = req.file.path;
    let name = req.body.name;

    cloudinary.uploader.upload(path, function(result) {
      Images.findOneAndUpdate({name: name}, {$push:{images: result.url}}, {new: true}, function(err, doc) {
        console.log(doc);
      })

    });
    res.status(204).end()
});

module.exports = router;
