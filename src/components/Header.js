import React from 'react';
import '../styles/components/Header.css';



const Header = (props) => (
    <div className="App-header">
        <h1>Exhibition</h1>
        <button className="button" onClick={props.handleMenu}>Open Menu</button>
    </div>
)

export default Header;