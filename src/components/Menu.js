import React from 'react';
import '../styles/components/Menu.css';


export default class Menu extends React.Component {
    //Setting music category in exhibition
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
    //Setting category of text in exhibition
    handleRadioTextEvent = (event) =>{
        const eventName = event.target.value;
        this.props.setTextPath(eventName);
    }
    //Setting image category in exhibition
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
    //Rendering the menu component
    render(){
        return(
            <div className="Menu">
                <div className="Menu-main">
                <button className="close-menu-button" onClick={this.props.handleMenu}>X</button>
                  <div className="itemsContainer">
                    <div className="MusicMenu menuItem" onChange={this.handleRadioMusicEvent}>
                        <h3 className="MenuHeader">Music</h3>
                        <div>
                        <input className="radio-input" type="radio" name="music" value="LOUNGE" />
                        <label>Lounge</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" name="music" value="ORCHESTRAL" />
                        <label>Orchestral</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" name="music" value="RHYTHM" />
                        <label>Rhythm</label>
                        </div>

                    </div>
                    <div className="ImageMenu menuItem" onChange={this.handleRadioImageEvent}>
                    <h3 className="MenuHeader">Image</h3>
                        <div>
                        <input className="radio-input" type="radio" name="image" value="ARCHITECTURE"/>
                        <label>Architecture</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" name="image" value="FLOWERS" />
                        <label>Flowers</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio" name="image" value="PET" />
                        <label>Pets</label>
                        </div>
                    </div>
                    <div className="TextMenu menuItem" onChange={this.handleRadioTextEvent}>
                    <h3 className="MenuHeader">Text</h3>
                        <div>
                        <input className="radio-input" type="radio"  name="text" value="haiku"/>
                        <label>Haiku</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio"  name="text" value="limerick"/>
                        <label>Limerick</label>
                        </div>

                        <div>
                        <input className="radio-input" type="radio"  name="text" value="love_poems" />
                        <label>Love poems</label>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }





}
