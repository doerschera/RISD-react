import React from 'react';
import Map from './map.js';

export default class MapWrapper extends React.Component {

  render() {
    return (
      <div class='white-box relative col m6' id='mapWrapper'>
        <Map building={this.props.building}/>
      </div>
    )
  }
}
