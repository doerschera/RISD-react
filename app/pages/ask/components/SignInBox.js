import React from 'react';

import Buttons from './SignInBoxButtons';
import SignInForm from './SignInForm';

export default class SignInBox extends React.Component {

  render() {
    return(
      <div class='container'>
        <div class='row'>
          <div class='col m12 white-box sign-in'>
            <h5>Ask a question, share an answer</h5>
            {this.props.signIn ? <SignInForm /> : null}
            {!this.props.signIn && !this.props.signUp ? <Buttons
              showSignIn={this.props.showSignIn}
            /> : null}
          </div>
        </div>
      </div>
    )
  }
}
