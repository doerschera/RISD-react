import React from 'react';
import { connect } from 'react-redux';


@connect((store) => {
  return {
    currentQuestion: store.ask.currentQuestion
  }
})
export default class QuestionHeading extends React.Component {


  render() {
    let color = this.props.currentQuestion ?
      this.props.currentQuestion.user.color
      : null
    return (
      <div class='row question-heading'>
        <div class="center col s2">
          <div class='circleImg valign-wrapper' style={{backgroundColor: color}}>
            <h1 class="vertical-align center">
              {this.props.currentQuestion ?
                this.props.currentQuestion.user.firstName[0]
                : null}
            </h1>
          </div>
        </div>
        <div class="col s10">
          <h2>{this.props.currentQuestion ?
              this.props.currentQuestion.title
              : null}</h2>
            <p>Asked by &nbsp;
            <span class="name-highlight">
              {this.props.currentQuestion ?
                this.props.currentQuestion.user.firstName + ' ' + this.props.currentQuestion.user.lastName
                : null}
            </span>
          </p>
        </div>
      </div>
    )
  }
}
