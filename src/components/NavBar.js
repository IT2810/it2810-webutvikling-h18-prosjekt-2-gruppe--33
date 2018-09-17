import React, { Component } from 'react';

import '../styles/components/NavBar.css';


export default class NavBar extends Component {

    tabClick= (e) => {
        const tab = parseInt(e.target.value);
        console.log(tab);
        this.props.handleActiveTab(tab);
    }

    render(){
        return(
            <div>
                <button className="button" onClick={this.tabClick} value='0'>Tab 1</button>
                <button className="button" onClick={this.tabClick} value='1'>Tab 2</button>
                <button className="button" onClick={this.tabClick} value='2'>Tab 3</button>
                <button className="button" onClick={this.tabClick} value='3'>Tab 4</button>
            </div>
        )
    }
}
