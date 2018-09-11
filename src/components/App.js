import React, { Component } from 'react';
import '../styles/components/App.css';

import HamburgerMenu from '../components/HamburgerMenu';
import Exhibition from '../components/Exhibition';

class App extends Component {


  /*

      - url has to be some external url
      - set up another server with 'python -m http.server' inside the assets folder

  */ 
  
  loadDoc(url, id) {
    fetch(url)
      .then(function(response) {
        // reutrn
        return response.text();   
      }).then(function(payload) {
        document.getElementById(id).innerHTML = payload;
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Exhibition </h1>
          <HamburgerMenu/>

        </header>

        <Exhibition/>

      </div>
    );
  }
}


export default App;
