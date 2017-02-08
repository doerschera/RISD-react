import React from 'react';

export default class AddComment extends React.Component {

  render() {
    return (
      <div class='container'>
        <div class='row'>
          <div class="col s12 white-box add-comment">
            <div class="input-field col s8 offset-s2">
              <h6>Join the conversation</h6>
              <textarea id="addComment" class="materialize-textarea"></textarea>
            </div>
            <div class="col s8 offset-s2">
              <button class='btn'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
