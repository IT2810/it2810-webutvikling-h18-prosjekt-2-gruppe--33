import React from 'react';


export default class ExhibitionItem extends React.Component{
        state = {
            isPlaying: ''
        }
    onTrackChange = (source,audio) => {
        this.setState({ isPlaying: source },function(){
             audio.pause();
             audio.load();
             audio.play();
        })
 }


    playAudio = () => {
        const play = this.props.playTab;
        let musicList = this.props.musica.map((item) => "http://0.0.0.0:8000/" + item+ ".mp3");
        if(play[0] == true){
            this.onTrackChange(musicList[0],this.blue);
            
        }
        if(play[1] == true){
            this.onTrackChange(musicList[1],this.red);
        }
        if(play[2] == true){
            this.onTrackChange(musicList[2],this.yellow);
        }
        if(play[3] == true){
            this.onTrackChange(musicList[3],this.pink);
        }

    }
    
    render(){
        let musicList = this.props.musica.map((item) => "http://0.0.0.0:8000/" + item+ ".mp3");

        return(
            <div>
            <p>{this.props.text}</p>
            <div id="myImage" dangerouslySetInnerHTML={{__html: this.props.im}}></div>
            <button className="button" onClick={this.playAudio}>Play Music</button>
            <audio ref={(blue) => { this.blue = blue; }}>
			<source src={musicList[0]} type="audio/mpeg" >
			</source>
            </audio>
            <audio ref={(red) => { this.red = red; }}>
			<source src={musicList[1]} type="audio/mpeg" >
			</source>
            </audio>
            <audio ref={(yellow) => { this.yellow = yellow; }}>
			<source src={musicList[2]} type="audio/mpeg" >
			</source>
            </audio>
            <audio ref={(pink) => { this.pink= pink; }}>
			<source src={musicList[3]} type="audio/mpeg" >
			</source>
            </audio>
            </div>

        )
    }
}

