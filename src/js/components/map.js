import React from 'react';
import buildings from '../../data/map-buildings.js';
import styles from '../../data/map-style.js';

export default class Map extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: 41.82865, lng: -71.40526},
      zoom: 18,
      style: styles
    })
  }

   render() {
     return  (
       <div id='map' ref='map'></div>
     )
   }
}
