import React from 'react';
import { connect } from 'react-redux';
import update from 'immutability-helper';

import {
  showSignIn,
  showSignUp,
  signInChange,
  signUpChange,
  currentUser } from '../../actions/askActions';

import { newUser, signIn } from '../../helpers';

import QuestionList from './components/QuestionList';
import SignInBox from './components/SignInBox';
import Footer from './components/footer';

@connect((store) => {
  return {
    currentUser: store.ask.currentUser
  }
})

export default class Ask extends React.Component {
  constructor() {
    super();

    this.showSignIn = this.showSignIn.bind(this);
    this.showSignUp = this.showSignUp.bind(this);
    this.signInOnChange = this.signInOnChange.bind(this);
    this.signUpOnChange = this.signUpOnChange.bind(this);
    this.majorSelectOnChange = this.majorSelectOnChange.bind(this);
    this.gradeSelectOnChange = this.gradeSelectOnChange.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.signIn = this.signIn.bind(this);
  }


  showSignIn() {
    this.props.dispatch(showSignIn());
  }

  showSignUp() {
    this.props.dispatch(showSignUp());
  }

  signInOnChange(event) {
    let newUserSignIn = update(this.props.userSignIn, {
      [event.target.name]: {$set: event.target.value}
    })

    this.props.dispatch(signInChange(newUserSignIn));
  }

  signUpOnChange(event, value) {
    let newUserSignUp = update(this.props.userSignUp, {
      [event.target.name]: {$set: event.target.value}
    })

    this.props.dispatch(signUpChange(newUserSignUp));
  }

  majorSelectOnChange(event, key, payload) {
    console.log(payload);
    let newUserSignUp = update(this.props.userSignUp, {
      areaOfInterest: {$set: payload}
    })

    this.props.dispatch(signUpChange(newUserSignUp));
  }

  gradeSelectOnChange(event, key, payload) {
    let newUserSignUp = update(this.props.userSignUp, {
      currentGrade: {$set: payload}
    })

    this.props.dispatch(signUpChange(newUserSignUp));
  }

  addNewUser() {
    if(this.props.userSignUp.password1 != this.props.userSignUp.password2) {
      document.getElementById('errorMsg').innerHTML = "Password information does not match. Please check your password."
      setTimeout(function() {
        document.getElementById('errorMsg').innerHTML = ''
      }, 5000);
    } else {
      newUser(this.props.userSignUp).then((response) => {

        if(typeof response.data != "object") {
          document.getElementById('errorMsg').innerHTML = response.data;
          setTimeout(function() {
            document.getElementById('errorMsg').innerHTML = ''
          }, 5000);
          return false;
        }

        let newUser = update(this.props.currentUser, {
          status: {$set: true},
          firstName: {$set: response.data.firstName},
          lastName: {$set: response.data.lastName},
          email: {$set: response.data.email},
          id: {$set: response.data._id},
          color: {$set: response.data.color}
        })

        this.props.dispatch(currentUser(newUser));

        let signUp = this.props.userSignUp;
        for(var field in signUp) {
          signUp[field] = ''
        }
        console.log(signUp);

        this.props.dispatch(signUpChange(signUp));
      })
    }
  }

  signIn() {
    signIn(this.props.userSignIn).then((response) => {
      console.log(response);

      if(response.data) {
        let newUser = update(this.props.currentUser, {
          status: {$set: true},
          firstName: {$set: response.data.firstName},
          lastName: {$set: response.data.lastName},
          email: {$set: response.data.email},
          id: {$set: response.data._id},
          color: {$set: response.data.color}
        })

        let clearUser = update(this.props.userSignIn, {
          email: {$set: ''},
          password: {$set: ''}
        })

        this.props.dispatch(currentUser(newUser));
        this.props.dispatch(signInChange(clearUser));
      } else {
        document.getElementById('errorMsg').innerHTML = "Email or password is incorrect!"
        setTimeout(() => {
          document.getElementById('errorMsg').innerHTML = ''
        }, 5000);
      }



    });
  }


  render() {
    return (
      <div>
        <QuestionList />
        {this.props.currentUser.status ? null :
        <SignInBox
          signInForm={this.props.signInForm}
          signUpForm={this.props.signUpForm}
          showSignIn={this.showSignIn}
          showSignUp={this.showSignUp}
          userSignIn={this.props.userSignIn}
          userSignUp={this.props.userSignUp}
          signInOnChange={this.signInOnChange}
          signUpOnChange={this.signUpOnChange}
          majorSelectOnChange={this.majorSelectOnChange}
          gradeSelectOnChange={this.gradeSelectOnChange}
          addNewUser={this.addNewUser}
          signIn={this.signIn}
        /> }
        <Footer />
      </div>
    )
  }
}
