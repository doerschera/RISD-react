import React from 'react';

export default class PrevArrow extends React.Component {

  render() {
    return (
      <div id="prev">
        <a href="#" onClick={this.props.prevStop}><i class="material-icons">arrow_backward</i>previous</a>
      </div>
    )
  }
}
