import React from 'react';

export default class UploadForm extends React.Component {
  render() {
    return (
      <div>
        <h4>Been there, done that?</h4>
        <form
          action="/api/upload"
          method="POST"
          encType="multipart/form-data"
          id="imageUploadForm"
          target="_self"
          onSubmit={this.props.onImageUpload}
        >
          <input id='file-upload' type='file' name="image"></input>
          <input name="name" value={this.props.building.name} style={{display: 'none'}}/>
          <button class="btn" type="submit">Add An Image</button>
        </form>
      </div>
    )
  }
}
