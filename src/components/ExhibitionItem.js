import React from 'react';
import '../styles/components/ExhibitionItem.css'

export default class ExhibitionItem extends React.Component{

    play = () => {

        this.playAudio.pause();
        this.playAudio.load();
        this.playAudio.play();
    }
    
    render(){
        return(
            <div className="ExhibitionItem">
                <div id="myImage" dangerouslySetInnerHTML={{__html: this.props.image}}></div>
                <p>{this.props.text}</p>
                <button className="button" onClick={this.play}></button>
                <audio ref={(playAudio) => { this.playAudio = playAudio; }}>
        			<source src={this.props.music} type="audio/mpeg" >
        			</source>
                </audio>
            </div>

        )
    }
}

