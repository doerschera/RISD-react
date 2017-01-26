import React from 'react';

import NextArrow from './NextArrow.js';
import PrevArrow from './PrevArrow.js';

export default class TourNav extends React.Component {

  render() {
    let nextArrow = <NextArrow nextStop={this.props.nextStop}/>;
    let prevArrow = <PrevArrow prevStop={this.props.prevStop}/>
    let seeAll = <div id="seeAll">
      <a href="#" onClick={this.props.allStops}>see all stops</a>
    </div>

    return(
      <div class="col m12" id="tourNav">
        {!this.props.start && !this.props.all && this.props.stop < (this.props.buildingInfo.length-1) ? nextArrow : null}
        {!this.props.all && !this.props.start ? seeAll : null}
        {!this.props.start && !this.props.all && this.props.stop > 0 ? prevArrow : null}
      </div>
    )
  }
}
