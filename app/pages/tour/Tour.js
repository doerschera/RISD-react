import React from 'react';

import MapWrapper from './components/MapWrapper.js';
import TourInfo from './components/TourInfo.js';
import TourImages from './components/TourImages.js';
import TourNav from './components/TourNav.js';
import Footer from './components/Footer.js';

export default class Tour extends React.Component {

  render() {
    return (
      <div>
        <div class='container'>
          <div class='row'>
            <MapWrapper
              building={this.props.building}
              nextStop={this.props.nextStop}
            />
            <TourInfo
              startTour={this.props.startTour}
              tour={this.props.tour}
              building={this.props.building}
              tourStop={this.props.tourStop}
              back={this.props.back}
              allStops={this.props.allStops}
              nextStop={this.props.nextStop}
              prevStop={this.props.prevStop}
            />
          </div>
          <div class='row'>
            <TourImages
              tour={this.props.tour}
              building={this.props.building}
            />
          </div>
        </div>
        <Footer footerID={this.props.footerID}/>
      </div>
    )
  }
}
