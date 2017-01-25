import React from 'react';

import Nav from './components/Nav';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}
