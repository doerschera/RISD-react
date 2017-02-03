import React from 'react';

export default class SignInForm extends React.Component {

  render() {
    return(
      <div class='row'>
        <div class='sign-in-form'>
          <div class="input-field col m6 offset-m3">
            <input id="signInEmail" type="text"></input>
            <label for="signInEmail">Email</label>
          </div>
          <div class='input-field col m6 offset-m3'>
            <input id="signInPassword" type="password"></input>
            <label for="signInPassword">Password</label>
          </div>
          <div class="col m12">
            <button class="btn" id="signInButton">Sign In</button>
          </div>
          <div class="col m12 switch-form">
            <a onClick={this.props.showSignUp}>or sign up</a>
          </div>
        </div>
      </div>
    )
  }
}
