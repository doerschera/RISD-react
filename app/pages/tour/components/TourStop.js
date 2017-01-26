import React from 'react';

import content from '../../../data/building-info.js';
import TourNav from './TourNav.js';

export default class TourStop extends React.Component {

  render() {
    return (
      <div class="white-box relative col m6" id='tourInfo'>
        <div class="row" id="heading">
          <div class="col m12">
            <h3>{this.props.building.name}</h3>
            <p>{this.props.building.departments}</p>
            <p>{this.props.building.address}</p>
          </div>
        </div>
        <div class="row">
          <div class="tourDescription m12">
            <p>
              {this.props.building.description}
            </p>
          </div>
        </div>
        <TourNav
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          buildingInfo={this.props.buildingInfo}
          allStops={this.props.allStops}
          all={this.props.all}
          stop={this.props.stop}
          start={this.props.start}
        />
      </div>
    )
  }
}
