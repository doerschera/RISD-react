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
      page: 'home',
      tour: 'start',
      navLinks: ['Student Life', 'Tour', 'Academics'],
      navID: 'nav-home',
      footerID: 'footer-tour'
    }
  }

  mainNav(event) {
    let page = event.target.innerHTML;
    let links = ['Student Life', 'Tour', 'Academics'];
    let navID = 'nav-home';
    let footerID = 'footer-tour';
    page = page.toLowerCase();

    if(page == 'student life') {
      links = ['Tour', 'Home', 'Academics'];
      navID = 'nav-student-life';
      footerID = 'footer-student-life';
    } else if (page == 'academics') {
      links = ['Student Life', 'Home', 'Tour'];
      navID = 'nav-academics';
      footerID = 'footer-academics';
    } else if(page == 'tour') {
      links = ['Student Life', 'Home', 'Academics']
      navID = 'nav-tour';
      footerID = 'footer-tour';
    }

    this.setState(
      {
        page: page,
        navLinks: links,
        navID: navID,
        footerID: footerID
      }
    );
  }

  arrowNav(event) {
    let page = event.target.getAttribute('data-page');
    let links = ['Student Life', 'Tour', 'Academics'];
    let navID = 'nav-home';
    let footerID = 'footer-tour';

    if(page == 'student life') {
      links = ['Tour', 'Home', 'Academics'];
      navID = 'nav-student-life';
      footerID = 'footer-student-life';
    } else if (page == 'academics') {
      links = ['Student Life', 'Home', 'Tour'];
      navID = 'nav-academics';
      footerID = 'footer-academics';
    } else if(page == 'tour') {
      links = ['Student Life', 'Home', 'Academics']
      navID = 'nav-tour';
      footerID = 'footer-tour';
    }

    this.setState(
      {
        page: page,
        navLinks: links,
        navID: navID,
        footerID: footerID
      }
    );
  }

  startTour() {
    console.log('click');
    this.setState({tour: ''});
  }

  nextStop() {
    let currentBuilding = this.state.currentBuilding;
    currentBuilding++
    console.log(currentBuilding);
    this.setState({currentBuilding: currentBuilding});
  }

  prevStop() {
    let currentBuilding = this.state.currentBuilding;
    currentBuilding--
    this.setState({currentBuilding: currentBuilding});
  }

  allStops() {
    console.log('click');
    this.setState({tour: 'all stops'})
  }

  back() {
    this.setState({tour: ''});
  }

  tourStop(event) {
    let building = event.target.getAttribute('data-building');
    console.log(building);
    this.setState({currentBuilding: building, tour: ''});
  }

  pageView() {
    if(this.state.page === 'tour') {
      return (<Tour
        building={this.state.currentBuilding}
        startTour={this.startTour.bind(this)}
        nextStop={this.nextStop.bind(this)}
        prevStop={this.prevStop.bind(this)}
        tour={this.state.tour}
        allStops={this.allStops.bind(this)}
        tourStop={this.tourStop.bind(this)}
        back={this.back.bind(this)}
        footerID={this.state.footerID}
    />);
    } else if (this.state.page === 'academics') {
      return <Academics footerID={this.state.footerID}/>;
    } else if (this.state.page === 'student life') {
      return <StudentLife footerID={this.state.footerID}/>;
    } else {
      return <Home arrowNav={this.arrowNav.bind(this)}/>
    }
  }

  render() {
    console.log(this.state);
    return (
      <div id='pageWrapper'>
        <Nav
          mainNav={this.mainNav.bind(this)}
          navLinks={this.state.navLinks}
          navID={this.state.navID}
        />
        {this.pageView()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
