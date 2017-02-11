import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

@connect((store) => {
  return {
    navList: store.nav.navList,
    navColor: store.nav.navColor
  }
})
export default class Nav extends React.Component {

  render() {
    let linkColor = this.props.navColor;
    let middleNav = '/'+this.props.navList[1];
    return(
      <ul class="nav" id={this.props.navID}>
        <li>
          <Link
            to={`/${this.props.navList[0]}`}
            style={{color: linkColor}}
            id="leftLink"
            >{this.props.navList[0]}</Link>
        </li>
        <li>
          <Link
            to={this.props.navList[1] === 'home' ? '/'
            : `/${this.props.navList[1]}` }
            style={{color: linkColor}}
            id="centerLink"
            >{this.props.navList[1]}</Link>
        </li>
        <li>
          <Link
            to={`/${this.props.navList[2]}`}
            style={{color: linkColor}}
            id="rightLink"
          >{this.props.navList[2]}</Link>
        </li>
      </ul>
    )
  }
}
