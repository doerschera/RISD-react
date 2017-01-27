import axios from 'axios';

export function getImages(stop) {
  return axios.get('/api/tour-images/'+stop).then((response) => {
    console.log(response);
    return response;
  })
}
