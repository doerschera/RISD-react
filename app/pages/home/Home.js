import React from 'react';

import Arrows from './components/Arrows.js';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div class='valign-wrapper welcome-wrapper'>
          <h1 class="welcome white-box">Welcome to <span><br></br></span> RISD </h1>
        </div>
        <Arrows />
      </div>
    )
  }
}
