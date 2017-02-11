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
    newQuestion: {
      title: '',
      body: '',
      category: '',
      user: '',
      comments: []
    },
    questions: false,
    currentQuestion: false,
    comment: '',
    error: ''
  },
action) {

  switch(action.type) {
    case "SHOW_SIGN_IN":
      return {...state, signInForm: true, signUpForm: false};

    case "SHOW_SIGN_UP":
      return {...state, signUpForm: true, signInForm: false}

    case "SIGN_UP_CHANGE":
      return {...state, userSignUp: {...state.userSignUp, [action.payload.field]: action.payload.value}}

    case "MAJOR_SELECT_CHANGE":
      return {...state, userSignUp: {...state.userSignUp, areaOfInterest: action.payload}}

    case "GRADE_SELECT_CHANGE":
      return {...state, userSignUp: {...state.userSignUp, currentGrade: action.payload}}

    case "SIGN_IN_CHANGE":
      return {...state, userSignIn: {...state.userSignIn, [action.payload.field]: action.payload.value}}

    case "CURRENT_USER":
      return {...state, currentUser: action.payload}

    case "CLEAR_NEW_USER":
      return {...state, userSignUp: action.payload}

    case "CLEAR_SIGNIN":
      return {...state, userSignIn: {email: '', password: ''}}

    case "SET_QUESTIONS":
      return {...state, questions: action.payload}

    case "SET_CURRENT_QUESTION":
      return {...state, currentQuestion: action.payload}

    case "SET_ERROR":
      return {...state, error: action.payload}

    case "CLEAR_ERROR":
      return {...state, error: ''}

    case "COMMENT_CHANGE":
      return {...state, comment: action.payload}

    case "QUESTION_CHANGE":
      return {...state, newQuestion: {...state.newQuestion, [action.payload.field]: action.payload.value}}

    case "CATEGORY_CHANGE":
      return {...state, newQuestion: {...state.newQuestion, category: action.payload}}

    case "SET_COMMENT":
      return {...state, currentQuestion: {...state.currentQuestion, comments: state.currentQuestion.comments.concat(action.payload)}}

    case "CLEAR_QUESTION":
      return {...state, newQuestion: action.payload}

    case "SIGN_OUT":
      return {...state, currentUser: action.payload}

    default:
      return state;
  }

}
