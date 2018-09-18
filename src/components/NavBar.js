import React, { Component } from 'react';

import '../styles/components/NavBar.css';


export default class NavBar extends Component {
  state = {
    activeButton: [true, false, false, false]
  }
  tabClick= (e) => {
      const tab = parseInt(e.target.value);
      console.log(tab);
      this.props.handleActiveTab(tab);
      this.state.activeButton = [false, false, false, false];
      this.state.activeButton[tab] = !this.state.activeButton[tab];
  }

  render(){
      return(
          <div id="navBarContainer">
              <button className={this.state.activeButton[0] ? 'navBarButtonSelected' : 'navBarButton'} onClick={this.tabClick} value='0'>&nbsp;&nbsp;&nbsp;&nbsp;</button>
              <button className={this.state.activeButton[1] ? 'navBarButtonSelected' : 'navBarButton'} onClick={this.tabClick} value='1'>&nbsp;&nbsp;&nbsp;&nbsp;</button>
              <button className={this.state.activeButton[2] ? 'navBarButtonSelected' : 'navBarButton'} onClick={this.tabClick} value='2'>&nbsp;&nbsp;&nbsp;&nbsp;</button>
              <button className={this.state.activeButton[3] ? 'navBarButtonSelected' : 'navBarButton'} onClick={this.tabClick} value='3'>&nbsp;&nbsp;&nbsp;&nbsp;</button>
          </div>
      )
  }
}
