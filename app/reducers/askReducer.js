export default function reducer(
  state={
    signInForm: false,
    signUpForm: false
  },
action) {

  switch(action.type) {
    case "SHOW_SIGN_IN":
      return {...state, signInForm: true, signUpForm: false};

    case "SHOW_SIGN_UP":
      return {...state, signUpForm: true, signInForm: false}

    default:
      return state;
  }

}
