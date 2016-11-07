import React from 'react';
import buildingInfo from '../../data/building-info.js';
import NextArrow from './next-arrow.js';
import PrevArrow from './prev-arrow.js';

export default class TourNav extends React.Component {

  render() {
    let nextArrow = <NextArrow nextStop={this.props.nextStop}/>;
    let prevArrow = <PrevArrow prevStop={this.props.prevStop}/>

    return(
      <div class="col m12" id="tourNav">
        {this.props.tour != 'start' && this.props.building < (buildingInfo.length-1) ? nextArrow : null}
        <div id="seeAll">
          <a href="#">see all stops</a>
        </div>
        {this.props.tour != 'start' && this.props.building > 0 ? prevArrow : null}
      </div>
    )
  }
}
