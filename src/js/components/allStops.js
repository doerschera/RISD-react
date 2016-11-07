import React from 'react';
import buildingInfo from '../../data/building-info.js';

export default class AllStops extends React.Component {

  render() {
    const allStops = buildingInfo.map((building, i) =>
      <a key={i} onClick={this.props.tourStop}>
        <li data-building={i}>{building.name}</li>
      </a>
    )

    return (
      <div class="white-box relative col m6" id="tourInfo">
        <ul>
          {allStops}
        </ul>
        <a onClick={this.props.back}>back</a>
      </div>
    )
  }
}
