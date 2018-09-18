import React from 'react';
import '../styles/components/Menu.css';



export default class Menu extends React.Component {

    handleRadioMusicEvent = (event) => {
        let musicType = event.target.value;
        if(musicType === 'RHYTHM'){
            let musicArray = [ 'wav/rhythm/rhythm1', 'wav/rhythm/rhythm2', 'wav/rhythm/rhythm3', 'wav/rhythm/rhythm4' ]
            this.props.setMusicPaths(musicArray);
        }
        if(musicType === 'LOUNGE'){
            let musicArray = ['wav/lounge/lounge1', 'wav/lounge/lounge2', 'wav/lounge/lounge3', 'wav/lounge/lounge4']
            this.props.setMusicPaths(musicArray);
        }
        if(musicType === 'ORCHESTRAL'){
            let musicArray = [ 'wav/orchestral/orchestral1', 'wav/orchestral/orchestral2', 'wav/orchestral/orchestral3', 'wav/orchestral/orchestral4' ]
            this.props.setMusicPaths(musicArray);
        }
    
    }

    handleRadioTextEvent = (event) =>{
        const eventName = event.target.value;
        this.props.setTextPath(eventName);
    }

    handleRadioImageEvent = (event) => {

        const eventName = event.target.value;

        if(eventName === 'ARCHITECTURE'){
            const folder = 'architecture';
            const imgName = 'architecture';
           this.props.setImagePaths(folder,imgName);
        }

        if(eventName === 'FLOWERS'){
            const folder = 'flowers';
            const imgName = 'flower';
            this.props.setImagePaths(folder,imgName);
        }

        if(eventName === 'PET'){
            const folder = 'pets';
            const imgName = 'pet';
            this.props.setImagePaths(folder,imgName);
        }
    }

    render(){
        return(
            <div className="Menu">
                <div className="Menu-main">
                <button className="close-menu-button" onClick={this.props.handleMenu}>X</button>
                    <div className="MusicMenu" onChange={this.handleRadioMusicEvent}>
                        <h3 className="MenuHeader">Music</h3>
                        <div>
                        <input className="radio-input" type="radio" id="huey" name="music" value="LOUNGE" />
                        <label htmlFor="huey">Lounge</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" id="dewey" name="music" value="ORCHESTRAL" />
                        <label htmlFor="dewey">Orchestral</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" id="louie" name="music" value="RHYTHM" />
                        <label htmlFor="louie">Rhythm</label>
                        </div>
                    
                    </div>
                    <div className="ImageMenu" onChange={this.handleRadioImageEvent}>
                    <h3 className="MenuHeader">Image</h3>
                        <div>
                        <input className="radio-input" type="radio" id="huey" name="image" value="ARCHITECTURE"/>
                        <label htmlFor="huey">Architecture</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" id="dewey" name="image" value="FLOWERS" />
                        <label htmlFor="dewey">Flowers</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" id="louie" name="image" value="PET" />
                        <label htmlFor="louie">Pets</label>
                        </div>
                    </div>
                    <div className="TextMenu" onChange={this.handleRadioTextEvent}>
                    <h3 className="MenuHeader">Text</h3>
                        <div>
                        <input className="radio-input" type="radio" id="huey" name="text" value="haiku"/>
                        <label htmlFor="huey">Haiku</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" id="dewey" name="text" value="limerick"/>
                        <label htmlFor="dewey">Limerick</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" id="louie" name="text" value="love_poems" />
                        <label htmlFor="louie">Love poems</label>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }

    



}