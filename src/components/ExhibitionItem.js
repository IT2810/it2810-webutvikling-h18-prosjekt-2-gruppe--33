import React from 'react';
import $ from 'jquery';


export default class ExhibitionItem extends React.Component{

    state = {
        random: undefined
    }
    render(){
        return(
            <div>
        <h1>ExhibitionItem</h1>
        <p>This is where the picture will be</p>
        <div id="ImageContainer">
        </div>
        <p>{this.props.text}</p>
        <div id="myImage" dangerouslySetInnerHTML={{__html: this.props.im}}>
        </div>
        <p>MUSIC PLAYER</p>
    </div>

        )
    }
}
