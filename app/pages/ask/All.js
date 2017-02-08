import React from 'react';

export default class All extends React.Component {

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
