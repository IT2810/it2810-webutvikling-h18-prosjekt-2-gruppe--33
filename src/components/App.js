import React, { Component } from 'react';
import '../styles/components/App.css'
import NavBar from './NavBar';
import ExhibitionItem from './ExhibitionItem';
import Menu from './Menu';
import Header from './Header';
import Exhibition from './Exhibition';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      textPath: 'http://0.0.0.0:8000/json/haiku.json',
      imagePaths: ['http://0.0.0.0:8000/svg/architecture/architecture1.svg','http://0.0.0.0:8000/svg/architecture/architecture2.svg','http://0.0.0.0:8000/svg/architecture/architecture3.svg','http://0.0.0.0:8000/svg/architecture/architecture4.svg'],
      musicPaths: ['wav/lounge/lounge1', 'wav/lounge/lounge2', 'wav/lounge/lounge3', 'wav/lounge/lounge4']
    }
  }


  handleMenu = () => {
    console.log("menu handled");
    this.setState(() =>({
      showMenu: this.state.showMenu ? false : true
    }))
  }

  setTextPath = (poemName) => {
    let textPath = 'http://0.0.0.0:8000/json/' + poemName + '.json';
    console.log(textPath);
    this.setState({textPath});
    
  }

  setMusicPaths = (musicArray) => {
    console.log(musicArray);
    this.setState({musicPaths: musicArray});
  }

  setImagePaths = (folder,imgName) => {
    let imagePaths = [];
    for(let i = 1; i<5; i++){
      let path = "http://0.0.0.0:8000/svg/" + folder + "/" + imgName + i + ".svg";
      imagePaths.push(path);
    }
    console.log(imagePaths);
    this.setState({imagePaths});

  }
  

  render() {
    
    let menu = null
    if(this.state.showMenu){
      menu =  <Menu setImagePaths={this.setImagePaths} setMusicPaths={this.setMusicPaths}  setTextPath={this.setTextPath}/>
    }

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
