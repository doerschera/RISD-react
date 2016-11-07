import React from 'react';
import content from '../../data/building-info.js';
import BaseInfo from './baseInfo.js';

export default class TourInfo extends React.Component {

  tourRender() {
    if(this.props.tour == 'start') {
      return (
        <BaseInfo startTour={this.props.startTour}/>
      )
    } else {
      return (
        <div class="white-box relative col m6" id='tourInfo'>
          <div class="row" id="heading">
            <div class="col m12">
              <h3>{content[this.props.building].name}</h3>
              <p>{content[this.props.building].departments}</p>
              <p>{content[this.props.building].address}</p>
            </div>
          </div>
          <div class="row">
            <div class="col m12" class="tourDescription">
              <p>
                {content[this.props.building].description}
              </p>
            </div>
          </div>
        </div>
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
