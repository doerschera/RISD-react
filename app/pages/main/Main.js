import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Nav from './components/Nav';

injectTapEventPlugin();

export default class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Nav />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
