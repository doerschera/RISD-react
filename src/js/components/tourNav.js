import React from 'react';

export default class TourNave extends React.Component {

  render() {
    return(
      <div class="col m12" id="tourNav">
        <div id="next">
          <a href="#">next<i class="material-icons">arrow_forward</i></a>
        </div>
        <div id="seeAll">
          <a href="#">see all stops</a>
        </div>
        <div id="prev">
          <a href="#"><i class="material-icons">arrow_backward</i>previous</a>
        </div>
      </div>
    )
  }
}
