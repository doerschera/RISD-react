import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Nav from './components/Nav';
import SignOut from './components/SignOut';

injectTapEventPlugin();

export default class Main extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SignOut />
          <Nav />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
