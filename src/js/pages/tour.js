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
          <TourInfo />
        </div>
        <TourNav />
        <div class='row'>
          <TopButton />
          <TourImages />
        </div>
        <Footer />
      </div>
    )
  }
}
