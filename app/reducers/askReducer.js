export default function reducer(
  state={
    signInForm: false,
    signUpForm: false,
    userSignIn: {
      email: '',
      password: ''
    },
    userSignUp: {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
      applicantType: '',
      currentGrade: '',
      areaOfInterest: ''
    }
  },
action) {

  switch(action.type) {
    case "SHOW_SIGN_IN":
      return {...state, signInForm: true, signUpForm: false};

    case "SHOW_SIGN_UP":
      return {...state, signUpForm: true, signInForm: false}

    case "SIGN_UP_CHANGE":
      return {...state, userSignUp: action.payload}

    default:
      return state;
  }

}
