import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect((store) => {
  return {
    navList: store.nav.navList
  }
})
export default class Nav extends React.Component {

  render() {
    let middleNav = '/'+this.props.navList[1];
    return(
      <ul class="nav" id={this.props.navID}>
        <li>
          <Link to={`/${this.props.navList[0]}`}>{this.props.navList[0]}</Link>
        </li>
        <li>
          <Link to={this.props.navList[1] === 'home' ? '/'
            : `/${this.props.navList[1]}` }>{this.props.navList[1]}</Link>
        </li>
        <li>
          <Link to={`/${this.props.navList[2]}`}>{this.props.navList[2]}</Link>
        </li>
      </ul>
    )
  }
}
