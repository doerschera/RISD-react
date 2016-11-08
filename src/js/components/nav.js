import React from 'react';
let id = 'nav-home';

export default class Nav extends React.Component {

  render() {
    return(
      <ul class="nav" id={this.props.navID}>
        <li><a href="#student-life" onClick={this.props.mainNav} id="leftLink">
          {this.props.navLinks[0]}
        </a></li>
        <li><a href="#tour" onClick={this.props.mainNav} id="centerLink">
          {this.props.navLinks[1]}
        </a></li>
        <li><a href="#academics" onClick={this.props.mainNav} id="rightLink">
          {this.props.navLinks[2]}
        </a></li>
      </ul>
    )
  }
}
