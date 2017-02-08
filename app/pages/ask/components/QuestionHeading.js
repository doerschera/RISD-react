import React from 'react';

export default class QuestionHeading extends React.Component {

  render() {
    return (
      <div class='row question-heading'>
        <div class="center col s2">
          <div class='circleImg valign-wrapper'><h1 class="vertical-align center">A</h1></div>
        </div>
        <div class="col s10">
          <h2>Question Title</h2>
          <p>Asked by <span class="name-highlight">Ke Peng</span> on 02/01/17</p>
        </div>
      </div>
    )
  }
}
