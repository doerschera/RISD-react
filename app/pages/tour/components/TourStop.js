import React from 'react';

import content from '../../../data/building-info.js';
import TourNav from './TourNav.js';

export default class TourStop extends React.Component {

  render() {
    return (
      <div class="white-box relative col m6" id='tourInfo'>
        <div class="row" id="heading">
          <div class="col m12">
            <h3>Name</h3>
            <p>Department</p>
            <p>Address</p>
          </div>
        </div>
        <div class="row">
          <div class="tourDescription m12">
            <p>
              Description
            </p>
          </div>
        </div>
        <TourNav
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          allStops={this.props.allStops}
        />
      </div>
    )
  }
}
