import React from 'react';

export default class Dropdown extends React.Component {

  render() {
    return(
      <div class="row">
        <div class="dropdown">
          <h4 class="dropdown-title" onClick={this.props.toggleDropdown}>Application Process
            <i class="material-icons dropdown-arrow">arrow_drop_down</i>
          </h4>
          <div class="dropdown-body closed">
            <ul>
              <li>When are applications due?</li>
              <li>How do I submit my application?</li>
              <li>What materials are required?</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
