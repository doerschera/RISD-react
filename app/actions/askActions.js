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
          if (response.data === "") {
            throw "You've already created an account! Please sign in."
            return false;
          }
          throw response.data
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
        dispatch(clearSignIn());

      })
      .catch((err) => {
        dispatch(setError(err));
        setTimeout(() => {
          dispatch(clearError());
        }, 5000)
      })
  }
}

export function clearSignIn() {
  return {
    type: "CLEAR_SIGNIN"
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

export function getQuestions() {
  return (dispatch) => {
    return axios.get('/api/allQuestions')
      .then((response) => {
        console.log(response);
        let questions = {
          applying: [],
          majors: [],
          liberalArts: [],
          studentLife: [],
          careers: [],
          other: []
        };

        response.data.forEach((item) => {
          switch(item.category) {
            case 'Applying':
              questions.applying.push(item);
            break;

            case 'Majors':
              questions.majors.push(item);
            break;

            case 'Liberal Arts':
              questions.liberalArts.push(item);
            break;

            case 'Student Life':
              questions.studentLife.push(item);
            break;

            case 'Careers':
              questions.careers.push(item);
            break;

            case 'Other':
              questions.other.push(item);
            break;
          }
        })

        dispatch(setQuestions(questions));
      })
  }
}

export function setQuestions(data) {
  return {
    type: "SET_QUESTIONS",
    payload: data
  }
}

export function getCurrentQuestion(id) {
  return (dispatch) => {
    console.log(id);
    return axios.get('/api/singleQuestion/'+id)
      .then((response) => {
        console.log(response);

        dispatch(setCurretQuestion(response.data));
      })
  }
}

export function setCurretQuestion(data) {
  return {
    type: "SET_CURRENT_QUESTION",
    payload: data
  }
}

export function commentOnChange(data) {
  return {
    type: "COMMENT_CHANGE",
    payload: data
  }
}

export function setNewComment(data) {
  return {
    type: "SET_COMMENT",
    payload: data
  }
}

export function addComment(value, user, id) {
  return (dispatch) => {
    let data = {
      body: value,
      user: user.firstName + ' ' + user.lastName,
      color: user.color
    }
    axios.post('/api/addComment/'+id, data)
      .then((result) => {
        console.log(result);

        dispatch(setNewComment(result.data.comments));
      })

      dispatch(commentOnChange(''));
  }
}

export function newQuestionOnChange(data) {
  return {
    type: "QUESTION_CHANGE",
    payload: data
  }
}

export function categoryOnChange(data) {
  return {
    type: "CATEGORY_CHANGE",
    payload: data
  }
}

export function addQuestion(question, userId) {
  return (dispatch) => {
    question.user = userId;
    axios.post('/api/newQuestion', question)
      .then((response) => {
        console.log(response);

        if(typeof response.data != 'object') {
          throw response.data
          return false;
        }

        dispatch(getQuestions());

        let clearQuestion = {
          title: '',
          body: '',
          category: '',
          user: '',
          comments: []
        }
        dispatch(clearNewQuestion(clearQuestion))
      })
      .catch((err) => {
        dispatch(setError(err));
        setTimeout(() => {
          dispatch(clearError());
        }, 5000)
      })
  }
}

export function clearNewQuestion(data) {
  return {
    type: "CLEAR_QUESTION",
    payload: data
  }
}

export function signOut(data) {
  return {
    type: "SIGN_OUT",
    payload: data
  }
}
