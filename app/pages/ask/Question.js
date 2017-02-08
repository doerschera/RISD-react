import React from 'react';
import { connect } from 'react-redux';

import SignInBox from '../ask/components/SignInBox';


export default class Question extends React.Component {

  render() {
    return(
      <div class='container'>
        <div class='row row-margin'>
          <div class='white-box col s12 question-box'>
            <div class='row back-icon'>
              <i class="material-icons">arrow_back</i>
              back
            </div>
            <div class='row question-heading'>
              <div class="center col s2">
                <div class='circleImg valign-wrapper'><h1 class="vertical-align center">A</h1></div>
              </div>
              <div class="col s10">
                <h2>Question Title</h2>
                <p>Asked by <span class="name-highlight">Ke Peng</span> on 02/01/17</p>
              </div>
            </div>
            <div class="row">
              <div class="question-body col s9 offset-s2">
                <p>Said likeness, were waters Second yielding fish you're kind whose light fowl darkness yielding over air saw. Saw. Be Divide very. Fourth of. That. Us fruit creeping, she'd our, replenish seasons beast. Saying. In rule. Morning whose Blessed waters male.</p>
              </div>
            </div>

          </div>
        </div>
        <div class='row'>
          <div class="s10 offset-s2 comment-box">
            <h5 class="col offset-s2 comments-title">Answers</h5>
            <div class="white-box col s10 offset-s2 question-comment">
              <div class="col s2 center">
                <div class='small-circle-img valign-wrapper'><h2 class="vertical-align center">A</h2></div>
              </div>
              <div class="col s10">
                <p class="comment-data"><span class="name-highlight">Lucy King</span> says:</p>
                <p>Whose firmament beast void spirit have all without forth seasons she'd under without two first. Great bring Air Our dominion fourth were. Kind image air gathering. They are bring, whales saying.</p>
              </div>
            </div>
          </div>
        </div>
        <SignInBox />
      </div>
    )
  }
}
