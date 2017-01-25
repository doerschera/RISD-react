import React from 'react';
import buildingInfo from '../../data/building-info.js';
import NextArrow from './next-arrow.js';
import PrevArrow from './prev-arrow.js';

export default class TourNav extends React.Component {

  render() {
    let nextArrow = <NextArrow nextStop={this.props.nextStop}/>;
    let prevArrow = <PrevArrow prevStop={this.props.prevStop}/>
    let seeAll = <div id="seeAll">
      <a href="#" onClick={this.props.allStops}>see all stops</a>
    </div>

    return(
      <div class="col m12" id="tourNav">
        {this.props.tour === '' && this.props.building < (buildingInfo.length-1) ? nextArrow : null}
        {this.props.tour != 'all stops' ? seeAll : null}
        {this.props.tour === '' && this.props.building > 0 ? prevArrow : null}
      </div>
    )
  }
}
