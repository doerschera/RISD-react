export function showSignIn() {
  return {
    type: "SHOW_SIGN_IN",
  }
}

export function showSignUp() {
  return {
    type: "SHOW_SIGN_UP"
  }
}

export function signUpChange(data) {
  return {
    type: "SIGN_UP_CHANGE",
    payload: data
  }
}
