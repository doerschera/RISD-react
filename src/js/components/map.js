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
      styles: styles
    })

    this.marker = new google.maps.Marker({
      position: buildings[this.props.building].position,
      icon: {
        url: 'http://i64.tinypic.com/352ptvr.jpg',
        scaledSize : new google.maps.Size(44, 64)
      },
      map: this.map,
      title: 'Woods-Gerry'
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.building + 'props');
    this.map.panTo(buildings[nextProps.building].position);

    this.marker = new google.maps.Marker({
      position: buildings[nextProps.building].position,
      icon: {
        url: 'http://i64.tinypic.com/352ptvr.jpg',
        scaledSize : new google.maps.Size(44, 64)
      },
      map: this.map
    })
  }

   render() {
     console.log(this.props);
     return  (
       <div id='map' ref='map'></div>
     )
   }
}
