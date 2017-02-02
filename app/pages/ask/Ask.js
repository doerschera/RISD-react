import React from 'react';
import { connect } from 'react-redux';

import { showSignIn, showSignUp } from '../../actions/askActions';

import Dropdown from './components/Dropdown';
import SignInBox from './components/SignInBox';
import Footer from './components/footer';

@connect((store) => {
  return {
    signIn: store.ask.signIn,
    signUp: store.ask.signUp
  }
})

export default class Ask extends React.Component {
  constructor() {
    super();

    this.showSignIn = this.showSignIn.bind(this);
  }

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

  showSignIn() {
    this.props.dispatch(showSignIn());
  }

  render() {
    return (
      <div>
        <div class="container">
          <div class="row row-margin">
            <div class="col m12 white-box" id="ask">
              <div class="ask-intro">
                <h2 class="ask-heading">Questions&#63; Answers.</h2>
                <p>
                  Applying to college can be stressful and confusing, but we're here to help . From portfolio submission to financial aid, we've got you covered. Browse answers by topic below, ask a question, or <a href="mailto: admissions@risd.edu">contact the admissions office directly.</a>
                </p>
              </div>
              <Dropdown toggleDropdown={this.toggleDropdown}/>
              <Dropdown toggleDropdown={this.toggleDropdown}/>
            </div>
          </div>
        </div>
        <SignInBox
          signIn={this.props.signIn}
          signUp={this.props.signUp}
          showSignIn={this.showSignIn}
        />
        <Footer />
      </div>
    )
  }
}
