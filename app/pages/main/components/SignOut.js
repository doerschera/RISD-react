import React from "react";
import { connect } from 'react-redux';

import { signOut } from '../../../actions/askActions';

@connect((store) => {
  return {
    currentUser: store.ask.currentUser
  }
}, (dispatch) => {
  return {
    signOut: () => {
      let clearUser = {
        status: false,
        firstName: '',
        lastName: '',
        email: '',
        id: '',
        color: ''
      }
      dispatch(signOut(clearUser))
    }
  }
})
export default class SignOut extends React.Component {

  render() {
    return(
      <div class="sign-out">
        {this.props.currentUser.status ?
        <p
          onClick={this.props.signOut}
        >Sign Out</p> : null}
      </div>
    )
  }
}
