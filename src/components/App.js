import React, { Component } from 'react';
import '../styles/components/App.css'
import NavBar from './NavBar';
import ExhibitionItem from './ExhibitionItem';
import Menu from './Menu';
import Header from './Header';

import HamburgerMenu from '../components/HamburgerMenu';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      showMenu: false,
      text: ''
    }
  }

  /*
  
  TODO: legge inn en generell fetch funksjon som henter en fil, send funksjonen ned til en knapp, onClick={props.fetchFunksjon}
  ,lagrer innholdet i 
  state-objektet text, og sender text som props ned til en komponent som kan vise denne teksten.

  */

  handleMenu = () => {
    this.setState(() =>({
      showMenu: this.state.showMenu ? false : true
    }))
  }

  handleTextFetch = () => {
    /*let m = undefined
    fetch('http://0.0.0.0:8000/txt/H1.txt').then(function(response) {
      return response.text();
    }).then(function(myText) {
    }).then(function(myText){
      this.setState({text: myText});
    });
    */
   fetch('http://0.0.0.0:8000/txt/H1.txt').then(function(response){
     return response.text();
   }).then(myText => this.setState({ text: myText }));

  }
  



  

  handleMusicFetch = () => {

  
  }

  handleSvgFetch = () => {

    fetch("http://0.0.0.0:8000/img/Little_miss_independent.svg")
  .then(response => response.text())
  .then(svg => document.getElementById('ImageContainer').insertAdjacentHTML("afterBegin", svg));

  }






  render() {
    let menu = null;
    if(this.state.showMenu){
      menu = <Menu handleTextFetch={this.handleTextFetch}/>
    }

    return (
      <div className="App">
        <Header handleMenu={this.handleMenu} />
        {menu}
        <ExhibitionItem text={this.state.text}/>
        <NavBar handleSvgFetch={this.handleSvgFetch}/>
      </div>
    );
  }
}


export default App;
