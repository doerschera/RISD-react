import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { gradeSelectOnChange } from '../../../actions/askActions';


@connect((store) => {
  return {
    userSignUp: store.ask.userSignUp
  }
}, (dispatch) => {
  return {
    gradeSelectOnChange: (event, key, payload) => {
      dispatch(gradeSelectOnChange(payload));
    }
  }
})
export default class GradeDropdown extends React.Component {

  render() {
    return(
      <div class="col m6 offset-m3">
        <SelectField
          name='currentGrade'
          value={this.props.userSignUp.currentGrade}
          style={{marginTop: 20}}
          floatingLabelText="Current Grade Level"
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
          onChange={this.props.gradeSelectOnChange}
        >
          <MenuItem value={'freshman'}
             primaryText="Freshman" />
          <MenuItem value='sophomore' primaryText="Sophomore" />
          <MenuItem value='junior' primaryText="Junior" />
          <MenuItem value='senior' primaryText="Senior" />
        </SelectField>
     </div>
    )
  }
}
