import React from 'react';

export default class Footer extends React.Component {

  render() {
    return (
      <div class="footer" id={this.props.footerID} style={{backgroundColor: "#4396b5"}}>
        <ul>
          <li><a class="white-link" href="http://www.risd.edu/admissions/" target="_blank">Apply to RISD</a></li>
          <li><a class="white-link" href="http://www.risd.edu/Admissions/Visit_RISD/" target="_blank">Visit in Person</a></li>
          <li>See more:</li>
          <li><a class="white-link" href="http://portfolios.risd.edu" target="_blank"> RISD Behance</a></li>
          <li><a class="white-link" href="http://our.risd.edu/" target="_blank">Our RISD</a></li>
          <li><a class="white-link" href="http://welcome.risd.edu" target="_blank">Admissions Blog</a></li>
        </ul>
      </div>
    )
  }
}
