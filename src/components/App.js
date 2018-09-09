import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/components/App.css';
import '../styles/components/hamburgers.css';

import HamburgerMenu from '../components/HamburgerMenu';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          
          <HamburgerMenu/>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is just a test</p>

      </div>
    );
  }
}


export default App;
