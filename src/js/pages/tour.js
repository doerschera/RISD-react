import React from 'react';
import MapWrapper from '../components/map-wrapper.js';

export default class Tour extends React.Component {

  render() {
    return (
      <div>
      <h1>Hello, maps</h1>
      <MapWrapper
        building={this.props.building}
        nextStop={this.props.nextStop}
    />
    </div>
    )
  }
}
