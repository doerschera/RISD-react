import React from 'react';
import { connect } from 'react-redux';

import { getImages } from '../../helpers';

import {
  nextStop,
  prevStop,
  startTour,
  allStops,
  back,
  goToStop,
  setImages,
  toggleLoading
} from '../../actions/tourActions';

import buildingInfo from '../../data/building-info';

import MapWrapper from './components/MapWrapper.js';
import TourInfo from './components/TourInfo.js';
import TourImages from './components/TourImages.js';
import TourNav from './components/TourNav.js';
import Footer from './components/Footer.js';

@connect((store) => {
  return {
    stop: store.tour.stop,
    start: store.tour.start,
    all: store.tour.all,
    images: store.tour.images,
    loading: store.tour.loading
  }
})
export default class Tour extends React.Component {
  constructor() {
    super();

    this.startTour = this.startTour.bind(this);
    this.nextStop = this.nextStop.bind(this);
    this.prevStop = this.prevStop.bind(this);
    this.allStops = this.allStops.bind(this);
    this.back = this.back.bind(this);
    this.goToStop = this.goToStop.bind(this);
    this.onImageUpload = this.onImageUpload.bind(this);
  }

  componentWillMount() {
    getImages(buildingInfo[this.props.stop].name).then((response) => {
      this.props.dispatch(setImages(response.data));
    })
  }

  startTour() {
    this.props.dispatch(startTour());
  }

  nextStop() {
    this.props.dispatch(nextStop());
  }

  prevStop() {
    this.props.dispatch(prevStop());
  }

  allStops() {
    this.props.dispatch(allStops());
  }

  back() {
    this.props.dispatch(back());
  }

  goToStop(event) {
    let stopNumber = event.target.getAttribute('data-building');
    this.props.dispatch(goToStop(stopNumber))
  }

  onImageUpload(event) {
    let stop = buildingInfo[this.props.stop].name;
    this.props.dispatch(toggleLoading());
    setTimeout(function() {
      getImages(stop).then((response) => {
        this.props.dispatch(setImages(response.data));
        this.props.dispatch(toggleLoading());
      })
    }.bind(this), 5000);
    // event.preventDefault();
  }

  render() {
    let building = buildingInfo[this.props.stop];

    return (
      <div>
        <div class='container'>
          <div class='row'>
            <MapWrapper
              building={building}
            />
            <TourInfo
              startTour={this.startTour}
              start={this.props.start}
              building={building}
              buildingInfo = {buildingInfo}
              back={this.back}
              all = {this.props.all}
              allStops={this.allStops}
              nextStop={this.nextStop}
              prevStop={this.prevStop}
              stop={this.props.stop}
              goToStop={this.goToStop}
            />
          </div>
          <div class='row'>
            <TourImages
              building={building}
              tour={this.props.tour}
              images={this.props.images}
              addImage={this.addImage}
              onImageUpload={this.onImageUpload}
              loading={this.props.loading}
            />
          </div>
        </div>
        <Footer footerID={this.props.footerID}/>
      </div>
    )
  }
}
