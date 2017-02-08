import axios from 'axios';

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

export function signInChange(data) {
  return {
    type: "SIGN_IN_CHANGE",
    payload: data
  }
}

export function signUpChange(data) {
  return {
    type: "SIGN_UP_CHANGE",
    payload: data
  }
}

export function majorSelectOnChange(data) {
  return {
    type: "MAJOR_SELECT_CHANGE",
    payload: data
  }
}

export function gradeSelectOnChange(data) {
  return {
    type: "GRADE_SELECT_CHANGE",
    payload: data
  }
}

export function setError(err) {
  return {
    type: "SET_ERROR",
    payload: err
  }
}

export function addNewUser(newUser) {
  (dispatch) => {
    return axios.post('/api/newUser', newUser)
      .then((response) => {
        if(typeof response != 'object') {
          throw response
        }

        dispatch(currentUser(response));

        let signUp = this.props.userSignUp;
        for(var field in signUp) {
          signUp[field] = ''
        }
        dispatch(signUpChange(signUp));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
  }
}

export function clearNewUser() {
  return {
    type: "CLEAR_NEW_USER"
  }
}

export function currentUser(data) {
  return {
    type: "CURRENT_USER",
    payload: data
  }
}
