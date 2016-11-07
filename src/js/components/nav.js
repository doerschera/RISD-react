import React from 'react';

export default class Nav extends React.Component {

  render() {
    return(
      <ul class="nav">
        <li><a href="#student-life" onClick={this.props.mainNav}>
          {this.props.navLinks[0]}
        </a></li>
        <li><a href="#tour" onClick={this.props.mainNav}>
          {this.props.navLinks[1]}
        </a></li>
        <li><a href="#academics" onClick={this.props.mainNav}>
          {this.props.navLinks[2]}
        </a></li>
      </ul>
    )
  }
}
