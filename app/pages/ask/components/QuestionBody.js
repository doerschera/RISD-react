import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    currentQuestion: store.ask.currentQuestion
  }
})
export default class QuestionBody extends React.Component {

  render() {
    return (
      <div class="row">
        <div class="question-body col s9 offset-s2">
          <p>{this.props.currentQuestion ?
            this.props.currentQuestion.body
            : null}</p>
        </div>
      </div>
    )
  }
}
