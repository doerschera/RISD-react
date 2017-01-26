import React from 'react';

import TourNav from './TourNav.js';

export default class BaseInfo extends React.Component {

  render() {
    return (
      <div class="white-box relative col m6" id='tourInfo'>
        <div class="row" id="heading">
          <div class="col m12">
            <h1>Let's go.</h1>
          </div>
        </div>
        <div class="row">
          <div class="col m12" id="description">
            <p id="introP">
              Welcome to RISD! This tour guides you through many of the buildings on campus, as well as all sixteen of our undergraduate majors. At each stop you can find images of buildings, studio spaces, and student work below. We hope this gives you insight into what life like as a RISD student. If you are interested in visitin in person or having questions about applying, please contact us through the Admissions office. Enjoy!
            </p>
          </div>
          <div class="col m12 center">
            <button
              class="waves-effect waves-light btn"
              type="button"
              id="startTour"
              onClick={this.props.startTour}
            >Start Tour</button>
          </div>
        </div>
        <TourNav
          buildingInfo={this.props.buildingInfo}
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
          allStops={this.props.allStops}
          all={this.props.all}
          stop={this.props.stop}
          start={this.props.start}
        />
      </div>
    )
  }
}
