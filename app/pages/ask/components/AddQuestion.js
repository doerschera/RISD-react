import React from "react";
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Error from './Error';

import {
  newQuestionOnChange,
  categoryOnChange,
  addQuestion
} from '../../../actions/askActions';

let categories = ['Applying', 'Majors', 'Liberal Arts', 'Student Life', 'Careers', 'Other'];

@connect((store) => {
  return {
    currentUser: store.ask.currentUser,
    newQuestion: store.ask.newQuestion
  }
}, (dispatch) => {
  return {
    newQuestionOnChange: (event) => {
      let data = {
        field: event.target.name,
        value: event.target.value
      }

      dispatch(newQuestionOnChange(data))
    },
    categoryOnChange: (event, value, payload) => {
      dispatch(categoryOnChange(payload))
    },
    addQuestion: (question, userId) => {
      dispatch(addQuestion(question, userId))
    }
  }
})
export default class AddQuestions extends React.Component {

  render() {
    return(
      <div class="container">
        <div class="row">
          <div class="col s12 white-box add-question">
            <div class="col s8 offset-s2">
              <h6>Add your question</h6>
            </div>
            <div class="input-field col s8 offset-s2">
              <input
                name="title"
                type="text"
                value={this.props.newQuestion.title}
                onChange={this.props.newQuestionOnChange}
              ></input>
            <label>Question Title*</label>
            </div>
            <div class="input-field col s8 offset-s2">
              <textarea
                name="body"
                type="text"
                class="materialize-textarea"
                value={this.props.newQuestion.body}
                onChange={this.props.newQuestionOnChange}
              ></textarea>
              <label>Additional Info <em>(optional)</em></label>
            </div>
            <div class="col m4 offset-m4">
              <SelectField
                name='category'
                value={this.props.newQuestion.category}
                style={{marginTop: 0, fontFamily: 'Open Sans'}}
                floatingLabelText="Category*"
                floatingLabelStyle={{
                  textAlign: 'left',
                  left: 0,
                  fontSize: '1rem',
                  color: '#9e9e9e'}}
                labelStyle={{textAlign: 'left', color: '#00ace6'}}
                underlineStyle={{borderColor: '#00ace6'}}
                menuItemStyle={{color: '#00ace6'}}
                selectedMenuItemStyle={{color: '#4dd2ff'}}
                iconStyle={{fill: '#00ace6'}}
                maxHeight={200}
                onChange={this.props.categoryOnChange}
              >
              {categories.map((category) => {
                return <MenuItem value={category} key={category} primaryText={category} />
              })}
             </SelectField>
            </div>
            <div class="col s8 offset-s2">
              <Error />
              <button
                class="btn"
                onClick={() => {this.props.addQuestion(
                  this.props.newQuestion,
                  this.props.currentUser._id
                )}}
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
