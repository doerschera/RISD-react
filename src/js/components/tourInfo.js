import React from 'react';
import TourStop from './tourStop.js';
import BaseInfo from './baseInfo.js';
import AllStops from './allStops.js';

export default class TourInfo extends React.Component {

  tourRender() {
    if(this.props.tour == 'start' && this.props.tour != 'all stops') {
      return (
        <BaseInfo startTour={this.props.startTour}/>
      )
    } else if (this.props.tour != 'all stops') {
      return (
        <TourStop building={this.props.building} />
      )
    } else {
      return (
        <AllStops tourStop={this.props.tourStop}/>
      )
    }
  }

  render() {
    console.log(this.props);
    return(
      <div>
        {this.tourRender()}
      </div>
    )
  }
}
