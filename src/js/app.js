import React from 'react';
import ReactDOM from 'react-dom';
import MapWrapper from './components/map-wrapper.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <MapWrapper />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
