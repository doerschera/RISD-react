import React from 'react';

export default class ImageUpload extends React.Component {


  render() {
    return(
      <div class="image-upload white-box col s8 offset-s2">
        <h4>Been there done that?</h4>
        <form
          action="/api/upload"
          method="POST"
          target="hidden-iframe"
          encType="multipart/form-data"
        >
          <input id='file-upload' type='file' name="image"></input>
          <input name="name" value={this.props.building.name} style={{display: 'none'}}/>
          <button class="btn" type="submit" onClick={this.props.onImageUpload}>Add An Image</button>
        </form>
        <iframe name="hidden-iframe" style={{display: 'none'}}></iframe>
      </div>
    )
  }
}
