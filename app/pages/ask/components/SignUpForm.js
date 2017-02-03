import React from 'react';

const majors = ['Apparel', 'Architecture', 'Ceramics', 'Film/Animation/Video', 'Furniture', 'Glass', 'Graphic Design', 'Illustration', 'Industrial Design', 'Interior Architecture', 'Jewelry & Metalsmithing', 'Painting', 'Photograhpy', 'Printmaking', 'Sculpture', 'Textiles']

export default class SignUpForm extends React.Component {

  render() {
    return(
      <div class='row'>
        <div class='sign-up-form'>
          <div class='input-field col m3 offset-m3'>
            <input id="first-name" type="text"></input>
            <label for="first-name">First Name</label>
          </div>
          <div class='input-field col m3'>
            <input id="last-name" type="text"></input>
            <label for="last-name">Last Name</label>
          </div>
          <div class='input-field col m6 offset-m3'>
            <input id="email" type="text"></input>
            <label for="email">Email Address</label>
          </div>
          <div class='input-field col m3 offset-m3'>
            <input id="password" type="password"></input>
            <label for="password">Password</label>
          </div>
          <div class='input-field col m3'>
            <input id="password2" type="password"></input>
            <label for="password2">Retype Password</label>
          </div>
          <div class="input-field col m6 offset-m3">
            <h6>I will apply as a:</h6>
            <input class="with-gap" type="radio" id="freshman" />
            <label for="freshman">Freshman</label>
            <input class="with-gap" type="radio" id="transfer" />
            <label for="transfer">Transfer</label>
            <input class="with-gap" type="radio" id="graduate" />
            <label for="graduate">Graduate</label>
          </div>
          <div class="input-field col m6 offset-m3">
           <select>
             <option value="" disabled selected>Current Grade Level</option>
             <option value="freshman">Freshman</option>
             <option value="sophomore">Sophomore</option>
             <option value="junior">Junior</option>
             <option value="senior">Senior</option>
           </select>
         </div>
         <div class="input-field col m6 offset-m3">
          <select>
            <option value="" disabled selected>Area of Interest</option>
            {majors.map((major) => {
              return <option value={major} key={major}>{major}</option>
            })}
          </select>
        </div>
        <div class="col m12">
          <button class="btn" id="signUpButton">Sign Up</button>
        </div>
        <div class="col m12 switch-form">
          <a>or sign in</a>
        </div>
      </div>
    </div>
    )
  }
}
