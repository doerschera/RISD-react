import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class SignUpRadioButtons extends React.Component {

  render() {
    return(
      <RadioButtonGroup name="applicantType"
        class='radio-button-group'
      >
        <RadioButton
          value="freshman"
          label="Freshman"
          style={{display: 'inline-block', width: '120px', color: '#00ace6', borderColor: '#00ace6'}}
          iconStyle={{marginRight: '8px'}}
          labelStyle={{textAlign: 'left', color:'#9e9e9e', lineHeight: '4px', fontFamily: 'Open Sans'}}
        />
        <RadioButton
          value="transfer"
          label="Transfer"
          style={{display: 'inline-block', width: '120px', color: '#00ace6'}}
          iconStyle={{marginRight: '8px'}}
          labelStyle={{textAlign: 'left', color:'#9e9e9e', lineHeight: '4px', fontFamily: 'Open Sans'}}
        />
        <RadioButton
          value="graduate"
          label="Graduate"
          style={{display: 'inline-block', width: '120px'}}
          iconStyle={{marginRight: '8px'}}
          labelStyle={{textAlign: 'left', color:'#9e9e9e', lineHeight: '4px', fontFamily: 'Open Sans'}}
        />
      </RadioButtonGroup>
    )
  }
}
