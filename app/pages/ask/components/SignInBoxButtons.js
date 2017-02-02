import React from 'react';

export default class SignInBoxButtons extends React.Component {

  render() {
    return(
      <div>
        <button
          class='btn'
          id="signInBoxButton"
          onClick={this.props.showSignIn}
        >Sign In</button>
        <button class='btn' id="signUpBoxButton">Sign Up</button>
      </div>
    )
  }
}
