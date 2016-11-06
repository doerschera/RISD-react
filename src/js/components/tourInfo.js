import React from 'react';

export default class TourInfo extends React.Component {

  render() {
    return(
      <div class="row">
        <div class="col m12" id="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col m12 center">
          <button class="waves-effect waves-light btn" type="button" id="startTour">Start Tour</button>
        </div>
      </div>
    )
  }
}
