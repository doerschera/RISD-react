import React from 'react';
import Row1 from '../components/acad-row1.js';
import Row2 from '../components/acad-row2.js';
import Footer from '../components/footer.js';

export default class Academics extends React.Component {

  render() {
    return(
      <div>
        <div class="container">
          <Row1 />
          <Row2 />
        </div>
        <Footer footerID={this.props.footerID}/>
      </div>
    )
  }
}
