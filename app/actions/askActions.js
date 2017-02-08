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

export function clearError() {
  return {
    type: "CLEAR_ERROR"
  }
}

export function addNewUser(user) {
  return (dispatch) => {
    return axios.post('/api/newUser', user)
      .then((response) => {
        console.log(response);
        if(typeof response.data != 'object') {
          throw response
          return false;
        }

        response.data.status = true;
        dispatch(currentUser(response.data));

        let signUp = {
          firstName: '',
          lastName: '',
          email: '',
          password1: '',
          password2: '',
          applicantType: '',
          currentGrade: '',
          areaOfInterest: '',
        }
        dispatch(clearNewUser(signUp));
      })
      .catch((err) => {
        dispatch(setError(err));
        setTimeout(() => {
          dispatch(clearError());
        }, 5000)
      })
  }
}

export function signIn(user) {
  return (dispatch) => {
    return axios.post('/api/signIn', user)
      .then((response) => {
        if(!response.data) {
          throw "Email or password is incorrect!";
          return false;
        }

        response.data.status = true;
        dispatch(currentUser(response.data));

        let signUp = {
          firstName: '',
          lastName: '',
          email: '',
          password1: '',
          password2: '',
          applicantType: '',
          currentGrade: '',
          areaOfInterest: '',
        }
        dispatch(clearNewUser(signUp));

      })
      .catch((err) => {
        dispatch(setError(err));
        setTimeout(() => {
          dispatch(clearError());
        }, 5000)
      })
  }
}

export function clearNewUser(data) {
  return {
    type: "CLEAR_NEW_USER",
    payload: data
  }
}

export function currentUser(data) {
  return {
    type: "CURRENT_USER",
    payload: data
  }
}
