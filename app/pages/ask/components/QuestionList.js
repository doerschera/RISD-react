import React from 'react';

import Dropdown from './Dropdown';

export default class QuestionList extends React.Component {

  render() {
    return(
      <div class="container">
        <div class="row row-margin">
          <div class="col m12 white-box" id="ask">
            <div class="ask-intro">
              <h2 class="ask-heading">Questions&#63; Answers.</h2>
              <p>
                Applying to college can be stressful and confusing, but we're here to help . From portfolio submission to financial aid, we've got you covered. Browse answers by topic below, ask a question, or <a href="mailto: admissions@risd.edu">contact the admissions office directly.</a>
              </p>
            </div>
            <Dropdown />
          </div>
        </div>
      </div>
    )
  }
}
