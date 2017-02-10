import React from 'react';
import { connect } from 'react-redux';

import {
  showSignIn,
  showSignUp,
  signInChange,
  signUpChange,
  currentUser } from '../../actions/askActions';

import { newUser, signIn } from '../../helpers';

import QuestionList from './components/QuestionList';
import SignInBox from './components/SignInBox';
import AddQuestion from './components/AddQuestion';
import Footer from './components/footer';

@connect((store) => {
  return {
    currentUser: store.ask.currentUser
  }
})

export default class Ask extends React.Component {

  render() {
    return (
      <div>
        <QuestionList />
        {this.props.currentUser.status ?
          <AddQuestion /> :
        <SignInBox /> }
        <Footer />
      </div>
    )
  }
}
