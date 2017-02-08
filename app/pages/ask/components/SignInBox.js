import React from 'react';
import { connect } from 'react-redux';

import Buttons from './SignInBoxButtons';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';


@connect((store) => {
  return {
    signInForm: store.ask.signInForm,
    signUpForm: store.ask.signUpForm
  }
})
export default class SignInBox extends React.Component {

  render() {
    return(
      <div class='container'>
        <div class='row'>
          <div class='col m12 white-box sign-in'>
            <h5>Ask a question, share an answer</h5>
            {this.props.signInForm ?  <SignInForm />  : null}
            {this.props.signUpForm ? <SignUpForm /> : null}
            {!this.props.signInForm && !this.props.signUpForm
              ? <Buttons /> : null}
          </div>
        </div>
      </div>
    )
  }
}
