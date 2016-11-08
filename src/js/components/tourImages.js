import React from 'react';
import BaseImages from './baseImages.js';
import TopButton from './topButton.js';
import content from '../../data/building-info.js';

export default class TourImages extends React.Component {


  render() {
    const stopImages = content[this.props.building].images.map((image, i) =>
      <div class="col s6" key={i}>
        <div class="image-box">
          <img class="responsive-img" src={image} />
        </div>
      </div>
    )

    return (
      <div class="relative col s12" id="images">
        {this.props.tour === 'start' ? <BaseImages /> : stopImages}
        <TopButton />
      </div>
    )
  }
}
