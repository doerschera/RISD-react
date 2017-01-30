import React from 'react';
import TourStop from './TourStop.js';
import BaseInfo from './BaseInfo.js';
import AllStops from './AllStops.js';

export default class TourInfo extends React.Component {

  tourRender() {
    if(this.props.start) {
      return (
        <BaseInfo
          startTour={this.props.startTour}
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
      )
    } else if (!this.props.all) {
      return (
        <TourStop
          building={this.props.building}
          buildingInfo={this.props.buildingInfo}
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          allStops={this.props.allStops}
          all={this.props.all}
          stop={this.props.stop}
          start={this.props.start}
        />
      )
    } else {
      return (
        <AllStops
          back={this.props.back}
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          buildingInfo = {this.props.buildingInfo}
          allStops={this.props.allStops}
          all={this.props.all}
          stop={this.props.stop}
          start={this.props.start}
          goToStop={this.props.goToStop}
        />
      )
    }
  }

  render() {
    return(
      <div>
        {this.tourRender()}
      </div>
    )
  }
}
