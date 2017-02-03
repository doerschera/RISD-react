export default function reducer(
  state={
    signIn: false,
    signUp: true
  },
action) {

  switch(action.type) {
    case "SHOW_SIGN_IN":
      return {...state, signIn: true};

    case "SHOW_SIGN_UP":
      return {...state, signUp: true}

    default:
      return state;
  }

}
