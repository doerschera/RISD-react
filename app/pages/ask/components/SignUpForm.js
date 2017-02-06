import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import RadioButtons from './SignUpRadioButtons';
import GradeDropdown from './GradeDropdown';

const majors = ['Apparel', 'Architecture', 'Ceramics', 'Film/Animation/Video', 'Furniture', 'Glass', 'Graphic Design', 'Illustration', 'Industrial Design', 'Interior Architecture', 'Jewelry & Metalsmithing', 'Painting', 'Photograhpy', 'Printmaking', 'Sculpture', 'Textiles']

export default class SignUpForm extends React.Component {

  render() {
    return(
      <div class='row'>
        <div class='sign-up-form'>
          <div class='input-field col m3 offset-m3'>
            <input
              name="firstName"
              type="text"
              value={this.props.userSignUp.firstName}
              onChange={this.props.signUpOnChange}
            ></input>
            <label for="first-name">First Name*</label>
          </div>
          <div class='input-field col m3'>
            <input
              name="lastName"
              type="text"
              value={this.props.userSignUp.lastName}
              onChange={this.props.signUpOnChange}
            ></input>
            <label for="last-name">Last Name*</label>
          </div>
          <div class='input-field col m6 offset-m3'>
            <input
              name="email"
              type="text"
              value={this.props.userSignUp.email}
              onChange={this.props.signUpOnChange}
            ></input>
            <label for="email">Email Address*</label>
          </div>
          <div class='input-field col m3 offset-m3'>
            <input
              name="password1"
              type="password"
              value={this.props.userSignUp.password1}
              onChange={this.props.signUpOnChange}
            ></input>
            <label for="password">Password*</label>
          </div>
          <div class='input-field col m3'>
            <input
              name="password2"
              type="password"
              value={this.props.userSignUp.password2}
              onChange={this.props.signUpOnChange}
            ></input>
            <label for="password2">Retype Password*</label>
          </div>
          <div class="input-field col m8 offset-m2">
            <h6>I will apply as a:</h6>
            <RadioButtons userSignUp={this.props.userSignUp}
            signUpOnChange={this.props.signUpOnChange}
            />
          </div>
          {this.props.userSignUp.applicantType === 'freshman' ?
          <GradeDropdown
          gradeSelectOnChange={this.props.gradeSelectOnChange}
          userSignUp={this.props.userSignUp}/>
          : null}
         <div class="col m6 offset-m3">
           <SelectField
             name='areaOfInterest'
             value={this.props.userSignUp.areaOfInterest}
             style={{marginTop: 20, fontFamily: 'Open Sans'}}
             floatingLabelText="Area of Interest"
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
             onChange={this.props.majorSelectOnChange}
           >
           {majors.map((major) => {
             return <MenuItem value={major} key={major} primaryText={major} />
           })}
          </SelectField>
         </div>
        <div class="col m12">
          <button class="btn" id="signUpButton">Sign Up</button>
        </div>
        <div class="col m12 switch-form">
          <a onClick={this.props.showSignIn}>or sign in</a>
        </div>
      </div>
    </div>
    )
  }
}
