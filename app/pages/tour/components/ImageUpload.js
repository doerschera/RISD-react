import React from 'react';

import UploadForm from './UploadForm';
import Preloader from './Preloader';

export default class ImageUpload extends React.Component {


  render() {
    return(
      <div class="image-upload white-box col s8 offset-s2">
        {this.props.loading ? <Preloader /> :
          <UploadForm
            building={this.props.building}
            onImageUpload={this.props.onImageUpload}
          />
        }
        
      </div>
    )
  }
}
