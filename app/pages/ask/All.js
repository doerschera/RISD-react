import React from 'react';

export default class All extends React.Component {

  render() {
    return(
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
    )
  }
}
