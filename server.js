var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose').set('debug', true);
var routes = require('./app/api/routes');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/risd_tour');

var db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
})

db.once('open', function() {
  console.log('Mongoose connection successful');
})

app.get('*', function(req, res) {
  res.sendFile('public/index.html', {root: __dirname});
});

app.listen(PORT, function() {
  console.log('Listening on port '+PORT);
})
