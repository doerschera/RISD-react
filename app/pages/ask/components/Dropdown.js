import React from 'react';
import { connect } from 'react-redux';

import { getQuestions } from '../../../actions/askActions';

@connect((store) => {
  return {
    questions: store.ask.questions
  }
})

export default class Dropdown extends React.Component {
  componentWillMount() {
    console.log('here');
    this.props.dispatch(getQuestions());
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

  render() {

    return(
      <div>
        <div class="row">
          <div class="dropdown">
            <h4 class="dropdown-title" onClick={this.toggleDropdown}>
              Applying
              <i class="material-icons dropdown-arrow">arrow_drop_down</i>
            </h4>
            <div class="dropdown-body closed">
              <ul>
                {this.props.questions ? this.props.questions.applying.map((question) => {
                 return <li
                   key={question._id}
                   data-question={question._id}
                 >{question.title}</li>
             }) : null}
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="dropdown">
            <h4 class="dropdown-title" onClick={this.toggleDropdown}>
              Majors
              <i class="material-icons dropdown-arrow">arrow_drop_down</i>
            </h4>
            <div class="dropdown-body closed">
              <ul>
                {this.props.questions ? this.props.questions.majors.map((question) => {
                 return <li
                   key={question._id}
                   data-question={question._id}
                 >{question.title}</li>
             }) : null}
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="dropdown">
            <h4 class="dropdown-title" onClick={this.toggleDropdown}>
              Liberal Arts
              <i class="material-icons dropdown-arrow">arrow_drop_down</i>
            </h4>
            <div class="dropdown-body closed">
              <ul>
                {this.props.questions ? this.props.questions.liberalArts.map((question) => {
                 return <li
                   key={question._id}
                   data-question={question._id}
                 >{question.title}</li>
             }) : null}
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="dropdown">
            <h4 class="dropdown-title" onClick={this.toggleDropdown}>
              Student Life
              <i class="material-icons dropdown-arrow">arrow_drop_down</i>
            </h4>
            <div class="dropdown-body closed">
              <ul>
                {this.props.questions ? this.props.questions.studentLife.map((question) => {
                 return <li
                   key={question._id}
                   data-question={question._id}
                 >{question.title}</li>
             }) : null}
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="dropdown">
            <h4 class="dropdown-title" onClick={this.toggleDropdown}>
              Careers
              <i class="material-icons dropdown-arrow">arrow_drop_down</i>
            </h4>
            <div class="dropdown-body closed">
              <ul>
                {this.props.questions ? this.props.questions.careers.map((question) => {
                 return <li
                   key={question._id}
                   data-question={question._id}
                 >{question.title}</li>
             }) : null}
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="dropdown">
            <h4 class="dropdown-title" onClick={this.toggleDropdown}>
              Other
              <i class="material-icons dropdown-arrow">arrow_drop_down</i>
            </h4>
            <div class="dropdown-body closed">
              <ul>
                {this.props.questions ? this.props.questions.other.map((question) => {
                 return <li
                   key={question._id}
                   data-question={question._id}
                 >{question.title}</li>
             }) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
