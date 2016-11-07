import React from 'react';
import content from '../../data/building-info.js';
import TourNav from './tourNav.js';

export default class TourStop extends React.Component {

  render() {
    return (
      <div class="white-box relative col m6" id='tourInfo'>
        <div class="row" id="heading">
          <div class="col m12">
            <h3>{content[this.props.building].name}</h3>
            <p>{content[this.props.building].departments}</p>
            <p>{content[this.props.building].address}</p>
          </div>
        </div>
        <div class="row">
          <div class="col m12" class="tourDescription">
            <p>
              {content[this.props.building].description}
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
