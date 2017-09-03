import React, { Component } from 'react';
import LeftNavBar from './components/LeftNavBar.js'
import RightBody from './components/RightBody.js'

class App extends Component {
  render() {
    return (
      <div id="layout" className="pure-g">
        <LeftNavBar />
        <RightBody />
      </div>
    );
  }
}

export default App;
