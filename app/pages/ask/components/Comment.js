import React from "react";

export default class Comment extends React.Component {

  render() {
    let color = this.props.color;
    return (
      <div class="white-box col s10 offset-s2 question-comment">
        <div class="col s2 center">
          <div
            class='small-circle-img valign-wrapper'
            style={{backgroundColor: color}}
          >
            <h2
              class="vertical-align center"
            >{this.props.user[0]}</h2></div>
        </div>
        <div class="col s10">
          <p class="comment-data"><span class="name-highlight">{this.props.user}</span> &nbsp; says:</p>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}
