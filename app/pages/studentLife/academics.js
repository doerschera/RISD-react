import React from 'react';
import { connect } from 'react-redux';

import { changeNav } from '../../actions/navActions';

import Row1 from './components/acad-row1.js';
import Row2 from './components/acad-row2.js';
import StudentLife from './student-life';
import Footer from './components/footer.js';

@connect((store) => {return{}})
export default class Academics extends React.Component {

  componentWillMount() {
    this.props.dispatch(changeNav(['tour', 'home', 'ask']))
  }

  render() {
    return(
      <div>
        <div class="container">
          <Row1 />
          <Row2 />
        </div>
        <StudentLife />
        <Footer footerID={this.props.footerID}/>
      </div>
    )
  }
}
