import React from 'react';
import '../styles/components/Header.css';



const Header = (props) => (
    <div className="App-header">
      <div id="invisibleContent">&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div>
        <h1 className="header-title">Exhibition</h1>
      </div>
      <button className="header-button" onClick={props.handleMenu}>Change exhibition</button>
    </div>
)

export default Header;
