import React, { Component } from 'react';

import '../styles/components/NavBar.css';

//Navigation bar for switching between tabs in an exhibition
export default class NavBar extends Component {
  state = {
    activeButton: [true, false, false, false]
  }
  //OnClick event 
  tabClick= (e) => {
      const tab = parseInt(e.target.value);
      this.props.handleActiveTab(tab);
      let activeButton = [false, false, false, false];
      activeButton[tab] = !activeButton[tab];
      this.setState({activeButton});
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
