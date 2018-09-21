import React from 'react';
import '../styles/components/ExhibitionItem.css'

export default class ExhibitionItem extends React.Component{
    //Aduio logic
    play = () => {

        this.playAudio.pause();
        this.playAudio.load();
        this.playAudio.play();
    }
    //Presenting the exhibition
    render(){
        return(
            <div className="ExhibitionItem">
                <div className="flexItem" id="myImage" dangerouslySetInnerHTML={{__html: this.props.image}}></div>
                <div className="flexItem">
                  <p>{this.props.text}</p>
                </div>
                <div className="flexItem">
                  <button onClick={this.play}>
                      <svg width="50px" height="50px"x="0px" y="0px"
                           viewBox="0 0 60 60">
                      <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M45.563,30.826l-22,15
                          C23.394,45.941,23.197,46,23,46c-0.16,0-0.321-0.038-0.467-0.116C22.205,45.711,22,45.371,22,45V15c0-0.371,0.205-0.711,0.533-0.884
                          c0.328-0.174,0.724-0.15,1.031,0.058l22,15C45.836,29.36,46,29.669,46,30S45.836,30.64,45.563,30.826z"/>
                      </svg>
                  </button>

                  <audio ref={(playAudio) => { this.playAudio = playAudio; }}>
          			<source src={this.props.music} type="audio/mpeg" >
          			</source>
                  </audio>
                </div>
            </div>

        )
    }
}
