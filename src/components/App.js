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
      text: ['TAB 1 TEXT', 'TAB 2 TEXT','TAB 3 TEXT', 'TAB 4 TEXT'],
      playTab: [true,false,false,false],
      activeTab: 0,
      image1: '',
      image2: '',
      image3: '',
      image4: '',
      image: 'number',
      musica: ['wav/lounge/lounge1', 'wav/lounge/lounge2', 'wav/lounge/lounge3', 'wav/lounge/lounge4']
    }
  }


  handleMenu = () => {
    this.setState(() =>({
      showMenu: this.state.showMenu ? false : true
    }))
  }



  handleTextFetch = (poemName) => {
    fetch('http://0.0.0.0:8000/json/' + poemName + '.json').then(function(response){
     return response.json(); 
   }).then(myText => this.setState({ text: myText}));
  }


  handleTabs = (tabNumber) => {
    this.setState({activeTab: tabNumber});
    if(tabNumber == 0){
      this.setState({playTab: [true,false,false,false]})
    }
    if(tabNumber == 1){
      this.setState({playTab: [false,true,false,false]})
    }
    if(tabNumber == 2){
      this.setState({playTab: [false,false,true,false]})
    }
    if(tabNumber == 3){
      this.setState({playTab: [false,false,false,true]})
    }
  }

  handleSvgFetch = (folder,imgName) => {

  fetch("http://0.0.0.0:8000/svg/" + folder + "/" + imgName + "1.svg")
  .then(response => response.text())
  .then(svg => this.setState({image1: svg}));

  fetch("http://0.0.0.0:8000/svg/" + folder + "/" + imgName + "2.svg")
  .then(response => response.text())
  .then(svg => this.setState({image2: svg}));

  fetch("http://0.0.0.0:8000/svg/" + folder + "/" + imgName + "3.svg")
  .then(response => response.text())
  .then(svg => this.setState({image3: svg}));

  fetch("http://0.0.0.0:8000/svg/" + folder + "/" + imgName + "4.svg")
  .then(response => response.text())
  .then(svg => this.setState({image4: svg}));
  }

  setMusicPaths = (musicArray) => {
    this.setState({musica: musicArray});
  }


  /*

      - url has to be some external url
      - set up another server with 'python -m http.server' inside the assets folder

  */ 
  

  render() {
    let menu = null;

    if(this.state.showMenu){
      menu = <Menu setMusicPaths={this.setMusicPaths} handleSvgFetch={this.handleSvgFetch} handleTextFetch={this.handleTextFetch}/>
    }
    
    let item = null;
    if(this.state.image.length > 1){
      if(this.state.activeTab == 0){
          item = <ExhibitionItem playTab={this.state.playTab} musica={this.state.musica} im = {this.state.image1} text={this.state.text[this.state.activeTab]} />
      }
      if(this.state.activeTab == 1){
        item = <ExhibitionItem playTab={this.state.playTab} musica={this.state.musica}  im = {this.state.image2} text={this.state.text[this.state.activeTab]} />
      }
      if(this.state.activeTab == 2){
        item = <ExhibitionItem playTab={this.state.playTab} musica={this.state.musica}  im = {this.state.image3} text={this.state.text[this.state.activeTab]} />
      }
      if(this.state.activeTab == 3){
        item = <ExhibitionItem playTab={this.state.playTab} musica={this.state.musica}  im = {this.state.image4} text={this.state.text[this.state.activeTab]} />
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
