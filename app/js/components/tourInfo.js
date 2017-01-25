import React from 'react';
import TourStop from './tourStop.js';
import BaseInfo from './baseInfo.js';
import AllStops from './allStops.js';

export default class TourInfo extends React.Component {

  tourRender() {
    if(this.props.tour == 'start' && this.props.tour != 'all stops') {
      return (
        <BaseInfo
          startTour={this.props.startTour}
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          allStops={this.props.allStops}
        />
      )
    } else if (this.props.tour != 'all stops') {
      return (
        <TourStop
          building={this.props.building}
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          allStops={this.props.allStops}
        />
      )
    } else {
      return (
        <AllStops
          tourStop={this.props.tourStop}
          back={this.props.back}
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          allStops={this.props.allStops}
        />
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
