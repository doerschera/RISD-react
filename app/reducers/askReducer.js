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
      areaOfInterest: '',
    },
    currentUser: {
      status: false,
      firstName: '',
      lastName: '',
      email: '',
      id: '',
      color: ''
    },
    error: ''
  },
action) {

  switch(action.type) {
    case "SHOW_SIGN_IN":
      return {...state, signInForm: true, signUpForm: false};

    case "SHOW_SIGN_UP":
      return {...state, signUpForm: true, signInForm: false}

    case "SIGN_UP_CHANGE":
      return {...state, userSignUp: action.payload}

    case "MAJOR_SELECT_CHANGE":
      return {...state, userSignUp: {...userSignUp, areaOfInterest: action.payload}}

    case "GRADE_SELECT_CHANGE":
      return {...state, userSignUp: {...userSignUp, currentGrade: action.payload}}

    case "SIGN_IN_CHANGE":
      return {...state, userSignIn: action.payload}

    case "CURRENT_USER":
      return {...state, currentUser: action.payload}

    case "SET_ERROR":
      return {...state, error: action.payload}

    default:
      return state;
  }

}
