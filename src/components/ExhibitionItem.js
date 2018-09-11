import React from 'react';
import { getPortPromise } from 'portfinder';


const ExhibitionItem = (props) => (
    <div>
        <h1>ExhibitionItem</h1>
        <p>This is where the picture will be</p>
        <p>{props.text}</p>
        <p>MUSIC PLAYER</p>
    </div>

)

export default ExhibitionItem;