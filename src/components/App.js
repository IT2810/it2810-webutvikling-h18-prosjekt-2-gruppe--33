import React, { Component } from 'react';
import '../styles/components/App.css'
import NavBar from './NavBar';
import ExhibitionItem from './ExhibitionItem';
import Menu from './Menu';
import Header from './Header';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      showMenu: false,
      text: "text.txt",
      music: ['text1', 'text2','text3','text4'],
      pictures: ['svg_file_1']
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






  render() {
    let menu = null;
    if(this.state.showMenu){
      menu = <Menu />
    }

    return (
      <div className="App">
        <Header handleMenu={this.handleMenu} />
        {menu}
        <ExhibitionItem text={this.state.text}/>
        <NavBar />
      </div>
    );
  }
}

export default App;
