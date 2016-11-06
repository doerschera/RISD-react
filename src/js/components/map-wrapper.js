import React from 'react';
import Map from './map.js';

export default class MapWrapper extends React.Component {

  render() {
    return (
      <div>
        <Map building={this.props.building}/>
        <button onClick={this.props.nextStop}>Next</button>
      </div>
    )
  }
}
