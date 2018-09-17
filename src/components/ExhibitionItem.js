import React from 'react';


export default class ExhibitionItem extends React.Component{

    play = () => {

        this.playAudio.pause();
        this.playAudio.load();
        this.playAudio.play();
    }
    
    render(){
        return(
            <div>
            <p>{this.props.text}</p>
            <div id="myImage" dangerouslySetInnerHTML={{__html: this.props.image}}></div>
            <button className="button" onClick={this.play}>Play Music</button>
            <audio ref={(playAudio) => { this.playAudio = playAudio; }}>
			<source src={this.props.music} type="audio/mpeg" >
			</source>
            </audio>
            </div>

        )
    }
}

