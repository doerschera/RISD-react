'use strict'

const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const config = require('../../config');
const upload = multer({ dest: './uploads/'});
const passwordHash = require('password-hash');

const Images = require('./models/images');
const Users = require('./models/users');
const Questions = require('./models/questions');
const Comments = require('./models/comments');
let helpers = require('../helpers');

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

router.post('/api/newUser', function(req, res) {
  let data = req.body;
  let hashedPassword = passwordHash.generate(data.password1);

  data.password = hashedPassword;
  data.color = helpers.randomColor();
  data.comments =[];
  data.questions = [];

  if(data.password1 != data.password2) {
    res.send('Passwords do not match!');
    return false;
  }

  let user = new Users(data);
  user.save((err, result) => {
    if(err) {
      console.log(err);
      let errMsg;

      for(var field in err.errors) {
        errMsg = err.errors[field].message;
      }

      res.send(errMsg);
    } else {
      res.send(result);

    }
  })
})

router.post('/api/signIn', function(req, res) {
  var data = req.body;

  Users.find({email: data.email}, (err, result) => {
    if(err) {
      console.log(error);
    }

    if(result.length) {
      console.log(result);
      var hashedPassword = result[0].password;
      var verify = passwordHash.verify(data.password, hashedPassword);
      if(verify) {
        res.send(result[0]);
      } else {
        res.send(false);
      }
    } else {
      res.send(false);
    }
  })
})

router.get('/api/allQuestions',  function(req, res) {

  Questions.find({}, (err, result) => {
    if(err) {
      console.log(err);
    }

    console.log(result);
    res.send(result);
  })

})

module.exports = router;
