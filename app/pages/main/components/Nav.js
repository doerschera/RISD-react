import React from 'react';
import { Link } from 'react-router';

export default class Nav extends React.Component {

  render() {
    return(
      <ul class="nav" id={this.props.navID}>
        <li>
          <Link to="studentlife">Student Life</Link>
        </li>
        <li>
          <Link to="tour">Tour</Link>
        </li>
        <li>
          <Link to="ask">Ask</Link>
        </li>
      </ul>
    )
  }
}
