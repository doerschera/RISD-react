import React from 'react';
import { connect } from 'react-redux';

import { changeColor } from '../../actions/navActions';

import Row1 from './components/acad-row1.js';
import Row2 from './components/acad-row2.js';
import StudentLife from './student-life';
import Footer from './components/footer.js';

@connect((store) => {return{}})
export default class Academics extends React.Component {

  componentWillMount() {
    this.props.dispatch(changeColor('#4396b5'))
  }

  render() {
    return(
      <div>
        <div class="container" id="academicsContainer">
          <Row1 />
          <Row2 />
        </div>
        <StudentLife />
        <Footer footerID={this.props.footerID}/>
      </div>
    )
  }
}
