import React from 'react';

import Dropdown from './components/Dropdown';
import Footer from './components/footer';

export default class Ask extends React.Component {

  toggleDropdown(event) {
    let dropdownBody = event.target.parentNode.querySelector('.dropdown-body');

    if(event.target.classList.contains('dropdown-arrow')) {
      dropdownBody = event.target.parentNode.parentNode.querySelector('.dropdown-body');
    }

    if(dropdownBody.classList.contains('closed')) {
      dropdownBody.style.display = 'block';
      dropdownBody.classList.add('open');
      dropdownBody.classList.remove('closed');

      event.target.parentNode.querySelector('.dropdown-arrow').innerHTML="arrow_drop_up";
    } else if(dropdownBody.classList.contains('open')) {
      dropdownBody.style.display = 'none';
      dropdownBody.classList.add('closed');
      dropdownBody.classList.remove('open');
      event.target.parentNode.querySelector('.dropdown-arrow').innerHTML="arrow_drop_down";
    }

  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row row-margin">
            <div class="col m12 white-box">
              <div class="ask-intro">
                <h2 class="ask-heading">Questions&#63; Answers.</h2>
                <p>
                  Applying to college can be stressful and confusing, but we're here to help . From portfolio submission to financial aid, we've got you covered. Browse answers by topic below, ask a question, or <a href="mailto: admissions@risd.edu">contact the admissions office directly.</a>
                </p>
              </div>
              <Dropdown toggleDropdown={this.toggleDropdown}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
