import React from 'react';

export default class Preloader extends React.Component {

  render() {
    return (
      <div>
        <h4>Loading...</h4>
          <div class="preloader-wrapper active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
