import React from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

@connect((store) => {
  return {
    navColor: store.nav.navColor
  }
})
export default class Nav extends React.Component {

  render() {
    let linkColor = this.props.navColor;
    return(
      <ul class="nav" id={this.props.navID}>
        <li>
          <IndexLink
            to="/"
            style={{color: linkColor}}
            activeStyle={{backgroundColor: linkColor, color: 'white'}}
            id="homeLink"
            >Home</IndexLink>
        </li>
        <li>
          <Link
            to="/experience"
            style={{color: linkColor}}
            activeStyle={{backgroundColor: linkColor, color: 'white'}}
            id="experienceLink"
            >Experience</Link>
        </li>
        <li>
          <Link
            to="/tour"
            style={{color: linkColor}}
            activeStyle={{backgroundColor: linkColor, color: 'white'}}
            id="tourLink"
          >Tour</Link>
        </li>
        <li>
          <Link
            to="/ask"
            style={{color: linkColor}}
            activeStyle={{backgroundColor: linkColor, color: 'white'}}
            id="askLink"
          >Ask</Link>
        </li>
      </ul>
    )
  }
}
