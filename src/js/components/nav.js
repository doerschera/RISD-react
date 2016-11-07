import React from 'react';

export default class Nav extends React.Component {

  render() {
    return(
      <ul class="nav">
        <li><a href="#student-life" onClick={this.props.mainNav}>
          Student Life
        </a></li>
        <li><a href="#tour" onClick={this.props.mainNav}>
          Tour
        </a></li>
        <li><a href="#academics" onClick={this.props.mainNav}>
          Academics
        </a></li>
      </ul>
    )
  }
}
