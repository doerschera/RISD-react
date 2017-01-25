import React from 'react';

export default class NextArrow extends React.Component {

  render() {
    return (
      <div id="next">
        <a href="#" onClick={this.props.nextStop}>next<i class="material-icons">arrow_forward</i></a>
      </div>
    )
  }
}
