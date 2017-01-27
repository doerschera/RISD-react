import React from 'react';

import BaseImages from './BaseImages.js';
import TopButton from './TopButton.js';
import ImageUpload from './ImageUpload';

export default class TourImages extends React.Component {


  render() {
    const stopImages = this.props.building.images.map((image, i) =>
      <div class="col s6" key={i}>
        <div class="image-box">
          <img class="responsive-img materialboxed" src={image} />
        </div>
      </div>
    )

    return (
      <div class="relative col s12" id="images">
        {this.props.start ? <BaseImages /> : stopImages}
        <ImageUpload />
        <TopButton />
      </div>
    )
  }
}
