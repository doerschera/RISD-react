import React from 'react';

export default class SignInForm extends React.Component {

  render() {
    return(
      <div class='row'>
        <div class='sign-in-form'>
          <div class="input-field col m6 offset-m3">
            <input
              name="email"
              type="text" value={this.props.userSignIn.email}
              onChange={this.props.signInOnChange}
            ></input>
            <label for="signInEmail">Email</label>
          </div>
          <div class='input-field col m6 offset-m3'>
            <input
              name="password"
              type="password" value={this.props.userSignIn.password}
              onChange={this.props.signInOnChange}
            ></input>
            <label for="signInPassword">Password</label>
          </div>
          <div class="col m12">
            <p id="errorMsg"></p>
            <button
              class="btn"
              id="signInButton"
              onClick={this.props.signIn}
            >Sign In</button>
          </div>
          <div class="col m12 switch-form">
            <a onClick={this.props.showSignUp}>or sign up</a>
          </div>
        </div>
      </div>
    )
  }
}
