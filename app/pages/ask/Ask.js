import React from 'react';
import { connect } from 'react-redux';

import {
  showSignIn,
  showSignUp,
  signInChange,
  signUpChange,
  currentUser } from '../../actions/askActions';

import { changeColor } from '../../actions/navActions';

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
  componentWillMount() {
    this.props.dispatch(changeColor('#00ace6'));
  }

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
