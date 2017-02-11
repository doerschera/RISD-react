import React from 'react';
import { connect } from 'react-redux';

import { getCurrentQuestion } from '../../actions/askActions';

import { changeNav, changeColor } from '../../actions/navActions';

import BackArrow from './components/BackArrow';
import QuestionHeading from './components/QuestionHeading';
import QuestionBody from './components/QuestionBody';
import Comment from './components/Comment';
import SignInBox from './components/SignInBox';
import AddComment from './components/AddComment';
import Footer from './components/Footer';

@connect((store) => {
  return {
    currentUser: store.ask.currentUser,
    currentQuestion: store.ask.currentQuestion
  }
})
export default class Question extends React.Component {
  componentWillMount() {
    this.props.dispatch(getCurrentQuestion(this.props.params.id))
    this.props.dispatch(changeNav(['experience', 'home', 'tour']))
    this.props.dispatch(changeColor('#00ace6'));
  }

  render() {
    return(
      <div>
        <div class='container'>
          <div class='row row-margin'>
            <BackArrow />
            <div class='white-box col s12 question-box'>
              <QuestionHeading />
              <QuestionBody />
            </div>
          </div>
          <div class='row'>
            <div class="s10 offset-s2 comment-box">
              <h5 class="col offset-s2 comments-title">Answers</h5>
              {this.props.currentQuestion ?
              this.props.currentQuestion.comments.map((comment) => {
                  return <Comment
                    key={comment._id}
                    body={comment.body}
                    user={comment.user}
                    color={comment.color}
                  />
              }) : null}
            </div>
          </div>
        </div>
        {this.props.currentUser.status ?
          <AddComment questionId={this.props.params.id}/> : <SignInBox />}
        <Footer />
      </div>
    )
  }
}
