import React from 'react';
import { connect } from 'react-redux';

import { changeNav } from '../../actions/navActions';

import Arrows from './components/Arrows.js';

@connect((store) => {return{}})
export default class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(changeNav(['experience', 'tour', 'ask']))
  }


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
