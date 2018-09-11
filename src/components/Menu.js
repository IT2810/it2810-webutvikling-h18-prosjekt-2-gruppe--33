import React from 'react';
import '../styles/components/Menu.css';



export default class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            error: true,
        };
    }

    logEvent = (event) => {
        console.log(event.target.value)
        this.props.handleTextFetch();

    }

    render(){
        return(
            <div className="Menu">
                <div className="Menu-main">
                    <div className="MusicMenu" onChange={this.logEvent}>
                        <h3 className="MenuHeader">Music</h3>
                        <div>
                        <input type="radio" id="huey" name="music" value="HOUSE" />
                        <label htmlFor="huey">House</label>
                        </div>

                        <div>
                        <input type="radio" id="dewey" name="music" value="COUNTRY" />
                        <label htmlFor="dewey">Country</label>
                        </div>

                        <div>
                        <input type="radio" id="louie" name="music" value="METAL" />
                        <label htmlFor="louie">Metal</label>
                        </div>
                    
                    </div>
                    <div className="ImageMenu" onChange={this.logEvent}>
                    <h3 className="MenuHeader">Image</h3>
                        <div>
                        <input type="radio" id="huey" name="image" value="CITY"/>
                        <label htmlFor="huey">City</label>
                        </div>

                        <div>
                        <input type="radio" id="dewey" name="image" value="NATURE" />
                        <label htmlFor="dewey">Nature</label>
                        </div>

                        <div>
                        <input type="radio" id="louie" name="image" value="ART" />
                        <label htmlFor="louie">Art</label>
                        </div>
                    </div>
                    <div className="TextMenu">
                    <h3 className="MenuHeader">Text</h3>
                        <div>
                        <input type="radio" id="huey" name="text" />
                        <label htmlFor="huey">Love</label>
                        </div>

                        <div>
                        <input type="radio" id="dewey" name="text" />
                        <label htmlFor="dewey">Motivation</label>
                        </div>

                        <div>
                        <input type="radio" id="louie" name="text" />
                        <label htmlFor="louie">Qoute</label>
                        </div>
                    
                    </div>

                    <button className="GenerateButton">Generate Exhibition</button>
                </div>
            </div>
        )
    }

    



}