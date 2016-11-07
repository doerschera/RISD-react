import React from 'react';
import MapWrapper from '../components/map-wrapper.js';
import TourInfo from '../components/tourInfo.js';
import TourImages from '../components/tourImages.js';
import TourNav from '../components/tourNav.js';
import TopButton from '../components/TopButton.js';
import Footer from '../components/footer.js';

export default class Tour extends React.Component {

  render() {
    return (
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
          />
        </div>
        <TourNav
          nextStop={this.props.nextStop}
          prevStop={this.props.prevStop}
          tour={this.props.tour}
          building={this.props.building}
        />
        <div class='row'>
          <TopButton />
          <TourImages
            tour={this.props.tour}
            building={this.props.building}
          />
        </div>
        <Footer />
      </div>
    )
  }
}
