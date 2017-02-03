import React from 'react';

export default class GradeDropdown extends React.Component {

  redner() {
    return(
      <div class="col m6 offset-m3">
        <SelectField
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
        >
          <MenuItem value={'freshman'} primaryText="Freshman" />
          <MenuItem value='sophomore' primaryText="Sophomore" />
          <MenuItem value='junior' primaryText="Junior" />
          <MenuItem value='senior' primaryText="Senior" />
        </SelectField>
     </div>
    )
  }
}
