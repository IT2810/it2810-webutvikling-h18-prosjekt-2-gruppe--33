import React from 'react';


const NavBar = (props) => (
    <div>
        <button onClick={props.handleCloseMenu}>Tab 1</button>
        <button>Tab 2</button>
        <button>Tab 3</button>
        <button>Tab 4</button>
    </div>
)


export default NavBar;