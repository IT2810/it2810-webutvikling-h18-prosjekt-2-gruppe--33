import React from 'react';
import '../styles/components/Header.css';



const Header = (props) => (
    <div className="App-header">
        <h1 className="header-title">Exhibition</h1>
        <button className="header-button" onClick={props.handleMenu}>Open Menu</button>
    </div>
)

export default Header;