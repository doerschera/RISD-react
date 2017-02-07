import React from 'react';

import Buttons from './SignInBoxButtons';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export default class SignInBox extends React.Component {

  render() {
    return(
      <div class='container'>
        <div class='row'>
          <div class='col m12 white-box sign-in'>
            <h5>Ask a question, share an answer</h5>
            {this.props.signInForm ?
              <SignInForm showSignUp={this.props.showSignUp}
              userSignIn={this.props.userSignIn}
              signInOnChange={this.props.signInOnChange}
              signIn={this.props.signIn}
              />
              : null}
            {this.props.signUpForm ?
              <SignUpForm showSignIn={this.props.showSignIn}
              userSignUp={this.props.userSignUp}
              signUpOnChange={this.props.signUpOnChange}
              majorSelectOnChange={this.props.majorSelectOnChange}
              gradeSelectOnChange={this.props.gradeSelectOnChange}
              addNewUser={this.props.addNewUser}
              />
              : null}
            {!this.props.signInForm && !this.props.signUpForm ? <Buttons
              showSignIn={this.props.showSignIn}
              showSignUp={this.props.showSignUp}
            /> : null}
          </div>
        </div>
      </div>
    )
  }
}
