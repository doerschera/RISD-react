import React from 'react';
import { connect } from 'react-redux';

import { showSignIn, showSignUp } from '../../../actions/askActions';

@connect((store) => {return {}}, (dispatch) => {
  return {
    showSignIn: () => {
      dispatch(showSignIn())
    },
    showSignUp: () => {
      dispatch(showSignUp())
    }
  }
})
export default class SignInBoxButtons extends React.Component {

  render() {
    return(
      <div>
        <button
          class='btn'
          id="signInBoxButton"
          onClick={this.props.showSignIn}
        >Sign In</button>
        <button
          class='btn'
          id="signUpBoxButton"
          onClick={this.props.showSignUp}
        >Sign Up</button>
      </div>
    )
  }
}
