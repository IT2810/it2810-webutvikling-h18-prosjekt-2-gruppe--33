import React from 'react';
import NavBar from './NavBar';
import ExhibitionItem from './ExhibitionItem';



export default class Exhibition extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            images: ['','','',''],
            musicPaths: ['','','',''],
            text: ['','','',''],
            activeTab: 0
        }
      }

      handleActiveTab = (tabNumber) => {
        this.setState({activeTab: tabNumber});
      }
//Initial AJAX call when component first renders
    componentDidMount(){
      //Fetching text from JSON
      fetch(this.props.textPath).then(function(response){
          return response.json();
        }).then(myText => this.setState({ text: myText}));
      //Fetching SVG file and parsing
      fetch(this.props.imagePaths[this.state.activeTab])
      .then(response => response.text())
      .then(svg => {
          let images = this.state.images;
          images[this.state.activeTab] = svg;
          return images;
      })
      .then(images => this.setState({images}));
      //Setting music path
      let musicPaths = this.props.musicPaths.map((path) => 'http://0.0.0.0:8000/' + path + ".mp3");
      this.setState({musicPaths})

    }
//Similar fetch functions for when state is updated
    componentDidUpdate(prevProps,prevState){
        let initialState = ['','','','']
        if(prevProps.imagePaths !== this.props.imagePaths){
            let images = initialState;
            this.setState({images});
        }

        if(prevProps.musicPaths !== this.props.musicPaths){
            let musicPaths = this.props.musicPaths.map((path) => 'http://0.0.0.0:8000/' + path + ".mp3");
            this.setState({musicPaths});
        }

        if(prevProps.textPath !== this.props.textPath){
            let text = initialState;
            this.setState({text});
        }

        if(prevState.text[this.state.activeTab] === '') {
          console.log("Fetching text");
          fetch(this.props.textPath).then(function(response){
              return response.json();
            }).then(myText => this.setState({ text: myText}));
        }
        //Only fetches SVG if not already in state
        if(prevState.images[this.state.activeTab] === ''){
                console.log("Fetching image")
                fetch(this.props.imagePaths[this.state.activeTab])
                .then(response => response.text())
                .then(svg => {
                    let images = this.state.images;
                    images[this.state.activeTab] = svg;
                    return images;
                })
                .then(images => this.setState({images}));
        }
    }

      //Passing the fetched files to ExhibitionItem which is rendered to the DOM
      render() {
          let activeTab = this.state.activeTab;
          return(
              <div>
              <ExhibitionItem image={this.state.images[activeTab]} text={this.state.text[activeTab]} music={this.state.musicPaths[activeTab]}/>
              <NavBar handleActiveTab={this.handleActiveTab} />
              </div>
          )
      }




}
