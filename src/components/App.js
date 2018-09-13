import React, { Component } from 'react';
import '../styles/components/App.css'
import NavBar from './NavBar';
import ExhibitionItem from './ExhibitionItem';
import Menu from './Menu';
import Header from './Header';

import HamburgerMenu from '../components/HamburgerMenu';
import { stringify } from 'postcss';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      showMenu: false,
      text: ['TAB 1 TEXT', 'TAB 2 TEXT','TAB 3 TEXT', 'TAB 4 TEXT'],
      activeTab: 0,
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image: 'number'
    }
  }

  handleMenu = () => {
    this.setState(() =>({
      showMenu: this.state.showMenu ? false : true
    }))
  }



  handleTextFetch = (textFolderName) => { //NB, imgjør til json
    fetch('http://0.0.0.0:8000/txt/exampel/H1.json').then(function(response){
     return response.json(); 
   }).then(myText => this.setState({ text: myText}));
  }


  handleTabs = (tabNumber) => {
    this.setState({activeTab: tabNumber});
  }

  handleSvgFetch = () => {

  fetch("http://0.0.0.0:8000/img/miss1.svg")
  .then(response => response.text())
  .then(svg => this.setState({image1: svg}));

  fetch("http://0.0.0.0:8000/img/miss2.svg")
  .then(response => response.text())
  .then(svg => this.setState({image2: svg}));

  fetch("http://0.0.0.0:8000/img/miss3.svg")
  .then(response => response.text())
  .then(svg => this.setState({image3: svg}));

  fetch("http://0.0.0.0:8000/img/miss4.svg")
  .then(response => response.text())
  .then(svg => this.setState({image4: svg}));


  }

  render() {
    let menu = null;

    if(this.state.showMenu){
      menu = <Menu handleSvgFetch={this.handleSvgFetch} handleTextFetch={this.handleTextFetch}/>
    }
    
    let item = null;
    if(this.state.image.length > 1){
      if(this.state.activeTab == 0){
          item = <ExhibitionItem im = {this.state.image1} text={this.state.text[this.state.activeTab]} />
      }
      if(this.state.activeTab == 1){
        item = <ExhibitionItem im = {this.state.image2} text={this.state.text[this.state.activeTab]} />
      }
      if(this.state.activeTab == 2){
        item = <ExhibitionItem im = {this.state.image3} text={this.state.text[this.state.activeTab]} />
      }
      if(this.state.activeTab == 3){
        item = <ExhibitionItem im = {this.state.image4} text={this.state.text[this.state.activeTab]} />
      }
    }

    return (
      <div className="App">
        <Header handleMenu={this.handleMenu} />
        {menu}
        {item}
        <NavBar handleTabs={this.handleTabs} handleSvgFetch={this.handleSvgFetch}/>
      </div>
    );
  }
}


export default App;
