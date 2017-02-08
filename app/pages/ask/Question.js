import React from 'react';
import { connect } from 'react-redux';

import BackArrow from './components/BackArrow';
import QuestionHeading from './components/QuestionHeading';
import QuestionBody from './components/QuestionBody';
import Comment from './components/Comment';
import SignInBox from './components/SignInBox';


export default class Question extends React.Component {

  render() {
    return(
      <div>
        <div class='container'>
          <div class='row row-margin'>
            <div class='white-box col s12 question-box'>
              <BackArrow />
              <QuestionHeading />
              <QuestionBody />
            </div>
          </div>
          <div class='row'>
            <div class="s10 offset-s2 comment-box">
              <h5 class="col offset-s2 comments-title">Answers</h5>
              <Comment />
            </div>
          </div>
        </div>
        <SignInBox />
      </div>
    )
  }
}
