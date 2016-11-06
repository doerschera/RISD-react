import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav.js';
import Home from './pages/home.js';
import StudentLife from './pages/student-life.js';
import Academics from './pages/academics.js';
import Tour from './pages/tour.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBuilding: 0,
      page: 'tour'
    }
  }

  nextStop() {
    var currentBuilding = this.state.currentBuilding;
    currentBuilding++
    console.log(currentBuilding);
    this.setState({currentBuilding: currentBuilding});
  }

  pageView() {
    if(this.state.page === 'tour') {
      return (<Tour
        building={this.state.currentBuilding}
        nextStop={this.nextStop.bind(this)}
    />);
    } else if (this.state.page === 'academics') {
      return <Academics />;
    } else if (this.state.page === 'student life') {
      return <StudentLife />;
    } else {
      return <Home />
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Nav />
        {this.pageView()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
