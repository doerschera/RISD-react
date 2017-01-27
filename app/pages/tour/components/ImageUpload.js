import React from 'react';

export default class ImageUpload extends React.Component {


  render() {
    return(
      <div class="image-upload white-box col s8 offset-s2">
        <h4>Been there done that?</h4>
        <form>
          <input type='file'></input>
        </form>
        <button class="btn">Add An Image</button>
      </div>
    )
  }
}
