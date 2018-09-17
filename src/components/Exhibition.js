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

    componentDidMount(){
        fetch(this.props.textPath).then(function(response){
            return response.json();
          }).then(myText => this.setState({ text: myText}));

        fetch(this.props.imagePaths[this.state.activeTab])
        .then(response => response.text())
        .then(svg => {
            let images = this.state.images;
            images[this.state.activeTab] = svg;
            return images;
        })
        .then(images => this.setState({images}));
        let musicPaths = this.props.musicPaths.map((path) => 'http://0.0.0.0:8000/' + path + ".mp3");
        this.setState({musicPaths})

    }

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