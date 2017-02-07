'use strict'
var axios = require('axios');

var helpers = {
  getImages: function(stop) {
    return axios.get('/api/tour-images/'+stop).then((response) => {
      console.log(response);
      return response;
    })
  },
  imageLoading: function(image) {
    return axios.post('/api/upload', image).then((response) => {
      console.log(response);
    })
  },
  newUser: function(data) {
    return axios.post('/api/newUser', data).then((response) => {
      return response;
    })
  },
  signIn: function(data) {
    return axios.post('/api/signIn', data).then((response) => {
      return response;
    })
  },
  randomColor: function () {
    let hex = "ABCDEF0123456789".split('');
    let color = '#';

    for(var i = 0; i < 6; i++) {
      let index = Math.floor(Math.random()*16);
      color += hex[index];
    }

    return color;
  }
}




module.exports = helpers;
