import axios from 'axios';

export function getImages(stop) {
  return axios.get('/api/tour-images/'+stop).then((response) => {
    console.log(response);
    return response;
  })
}

export function addImage(image) {
  return axios.post('/api/upload', image).then((response) => {
    console.log(response);
  })
}
