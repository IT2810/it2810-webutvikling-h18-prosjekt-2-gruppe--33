import React, { Component } from 'react';
import '../styles/components/App.css'
import NavBar from './NavBar';
import ExhibitionItem from './ExhibitionItem';
import Menu from './Menu';
import Header from './Header';
import Exhibition from './Exhibition';

//The main component in our app
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      textPath: 'http://it2810-33.idi.ntnu.no/media/json/haiku.json',
      imagePaths: ['http://it2810-33.idi.ntnu.no/media/svg/architecture/architecture1.svg','http://it2810-33.idi.ntnu.no/media/svg/architecture/architecture2.svg','/src/assets/svg/architecture/architecture3.svg','/src/assets/svg/architecture/architecture4.svg'],
      musicPaths: ['wav/lounge/lounge1', 'wav/lounge/lounge2', 'wav/lounge/lounge3', 'wav/lounge/lounge4']
    }
  }

//Function for opening the menu
  handleMenu = () => {
    this.setState(() =>({
      showMenu: this.state.showMenu ? false : true
    }))
  }

//Functions for setting asset paths
  setTextPath = (poemName) => {
    let textPath = 'http://it2810-33.idi.ntnu.no/media/json/' + poemName + '.json';
    this.setState({textPath});

  }

  setMusicPaths = (musicArray) => {
    this.setState({musicPaths: musicArray});
  }

  setImagePaths = (folder,imgName) => {
    let imagePaths = [];
    for(let i = 1; i<5; i++){
      let path = "http://it2810-33.idi.ntnu.no/media/svg/" + folder + "/" + imgName + i + ".svg";
      imagePaths.push(path);
    }
    this.setState({imagePaths});

  }


  render() {

    let menu = null
    if(this.state.showMenu){
      menu =  <Menu handleMenu={this.handleMenu} setImagePaths={this.setImagePaths} setMusicPaths={this.setMusicPaths}  setTextPath={this.setTextPath}/>
    }
//Passing paths as props to Exhibition, which performs the actual AJAX
    return (
      <div className="App">
        <Header handleMenu={this.handleMenu} />
        {menu}
        <Exhibition imagePaths={this.state.imagePaths} textPath={this.state.textPath} musicPaths={this.state.musicPaths} />
      </div>
    );
  }
}


export default App;
