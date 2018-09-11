import React from 'react';
import '../styles/components/Menu.css';



export default class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isChecked1: true,
        };
    }

    render(){
        return(
            <div className="Menu">
            <div>
            <input type="radio" id="huey" name="drone" />
            <label htmlFor="huey">Huey</label>
            </div>

            <div>
            <input type="radio" id="dewey" name="drone" />
            <label htmlFor="dewey">Dewey</label>
            </div>

            <div>
            <input type="radio" id="louie" name="drone" />
            <label htmlFor="louie">Louie</label>
            </div>
            </div>
        )
    }

    



}