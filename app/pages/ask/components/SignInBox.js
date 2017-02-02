import React from 'react';

export default class SignInBox extends React.Component {

  render() {
    return(
      <div class='container'>
        <div class='row'>
          <div class='col m12 white-box sign-in'>
            <h5>Ask a question, share an answer</h5>
            <button class='btn' id="signInButton">Sign In</button>
            <button class='btn' id="signUpButton">Sign Up</button>
          </div>
        </div>
      </div>
    )
  }
}
