import React from 'react';
import { connect } from 'react-redux';

import { addComment, commentOnChange } from '../../../actions/askActions';

@connect((store) => {
  return {
    currentUser: store.ask.currentUser,
    currentQuestion: store.ask.currentQuestion,
    comment: store.ask.comment
  }
}, (dispatch) => {
  return {
    addComment: (value, user, id) => {

      dispatch(addComment(value, user, id))
    },
    commentOnChange: (event) => {
      dispatch(commentOnChange(event.target.value));
    }
  }
})

export default class AddComment extends React.Component {

  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class="col s12 white-box add-comment">
            <div class="input-field col s8 offset-s2">
              <h6>Join the conversation</h6>
              <textarea
                id="addComment" class="materialize-textarea"
                value={this.props.comment}
                onChange={this.props.commentOnChange}
              ></textarea>
            </div>
            <div class="col s8 offset-s2">
              <button
                class='btn'
                onClick={() => {this.props.addComment(
                  this.props.comment,
                  this.props.currentUser,
                  this.props.questionId
                )}}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
