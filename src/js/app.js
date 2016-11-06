import React from 'react';
import ReactDOM from 'react-dom';
import MapWrapper from './components/map-wrapper.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBuilding: 0
    }
  }

  nextStop() {
    var currentBuilding = this.state.currentBuilding;
    currentBuilding++
    console.log(currentBuilding);
    this.setState({currentBuilding: currentBuilding});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <MapWrapper
          building={this.state.currentBuilding}
          nextStop={this.nextStop.bind(this)}
      />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
